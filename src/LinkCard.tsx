import pinOutlined from './icons/pin_outline.svg'
import pinFilled from './icons/pin_filled.svg'
import {Link, linksMapState, pinnedLinkIDsState} from './Link'
import {useWindowSize} from 'react-use-size'
import React, {forwardRef} from 'react'
import {isTouchScreen, remToPx} from './utils'
import openInNewIcon from './icons/open_in_new_outline.svg'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import produce from 'immer'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'

export type BaseLinkCardProps = {
  link: Link,
  showPinned: boolean, // if false, only show pin when hovered
  onPinClicked: () => void,
  disabled: boolean,
  showDragHandle: boolean,
}

const BaseLinkCard = forwardRef<HTMLAnchorElement, BaseLinkCardProps>((props, ref) => {
  const link = props.link
  return <a
    draggable={false}
    ref={ref}
    className={'link-card relative group shadow-md hover:shadow-xl bg-white rounded-md duration-100 flex justify-start items-center p-2 overflow-hidden pl-4'}
    href={link.url}
    target="_blank"
    rel="noreferrer"
    onClick={(e) => {
      if (props.disabled) e.preventDefault()
    }}>
    {link.iconUrl ? <img className={'w-12 h-12 rounded-md'} src={link.iconUrl} alt={''}/> : null}
    <div className={'flex flex-col flex-1 min-w-0 ' + (link.iconUrl === null ? '' : 'pl-2')}>
      <span className={'text-xl font-medium truncate'}
            title={props.link.title}>
        {link.title}
        <img className={'w-5 h-5 ml-1 mb-0.5 inline duration-100 opacity-0 group-hover:opacity-40'} src={openInNewIcon}
             alt=""/>
      </span>
      <span className={'text-gray-500 truncate'}>{link.description}</span>
    </div>
    <div
      className={'absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white duration-100 ' + ((props.link.pinned || props.showPinned) ? '' : 'opacity-0 group-hover:opacity-100')}/>
    <button
      className={'absolute right-0 top-0 h-full w-14 flex items-center justify-center duration-100 group-hover:opacity-50 hover:bg-gray-300 ' + (props.showPinned ? 'opacity-50' : 'opacity-0')}
      title={link.pinned ? 'Unpin this link' : 'Pin this link'}
      onClick={(e) => {
        e.preventDefault()
        props.onPinClicked()
      }}>
      {link.pinned ?
        <img className={'w-8 h-8'} src={pinFilled} alt=""/> :
        <img className={'w-8 h-8 transform rotate-45'} src={pinOutlined} alt=""/>}
    </button>
  </a>
})

export type LinkCardProps = { linkID: string, isDragging?: boolean, section: 'pinned' | 'links', elemAttributes?: object, invisible?: boolean }

export const LinkCard = forwardRef<HTMLDivElement, LinkCardProps>((props, ref) => {
  const linksMap = useRecoilValue(linksMapState)
  const setPinnedLinkIDs = useSetRecoilState(pinnedLinkIDsState)

  const link = linksMap.get(props.linkID)!
  // todo className + (props.isDragging ? 'transform scale-110 opacity-80' : '')
  return <div key={props.linkID}
              className={'p-2 md:p-4 min-w-0 ' + (props.invisible ? 'opacity-0 ' : '') + (props.isDragging ? 'transform scale-110 opacity-80' : '')}
              ref={ref}
              onContextMenu={e => {
                if (isTouchScreen && props.section === 'pinned') {
                  e.preventDefault()
                  e.stopPropagation()
                  return false
                }
              }}
              {...props.elemAttributes}>
    <BaseLinkCard
      link={link}
      showPinned={isTouchScreen ? true : (props.section === 'pinned' ? false : link.pinned)}
      onPinClicked={() => {
        if (!props.isDragging) {
          setPinnedLinkIDs(oldIDs => produce(oldIDs, draft => {
            if (link.pinned) {
              const removeI = draft.indexOf(props.linkID)
              if (removeI > -1) {
                draft.splice(removeI, 1)
              }
            } else {
              draft.push(props.linkID)
            }
          }))
        }
      }}
      showDragHandle={props.section === 'pinned' && link.pinned && isTouchScreen}
      disabled={props.isDragging === true}/>
  </div>
})

export function DraggableLinkCard(props: { linkID: string }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging: isHidden,
  } = useSortable({
    id: props.linkID,
  })

  const elemAttributes = {
    ...attributes,
    ...listeners,
    style: {
      transform: CSS.Transform.toString(transform),
      transition,
    } as any,
  }

  return <LinkCard
    ref={setNodeRef}
    linkID={props.linkID}
    section={'pinned'}
    elemAttributes={elemAttributes}
    invisible={isHidden}/>
}

export const DraggingLinkCard = forwardRef<HTMLDivElement, { linkID: string }>((props, ref) => {
  return <LinkCard
    isDragging
    ref={ref}
    linkID={props.linkID}
    section={'pinned'}/>
})

export function UndraggableLinkCard(props: { linkID: string }) {
  return <LinkCard
    linkID={props.linkID}
    section={'links'}/>
}

export function useGridColumns() {
  const {width} = useWindowSize()
  const minWidthPx = remToPx(24)
  return Math.max(Math.floor(width / minWidthPx), 1)
}
