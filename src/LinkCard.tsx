import {Link, linksMapState, pinnedLinkIDsState} from './Link'
import {useWindowSize} from 'react-use-size'
import React, {forwardRef, useState} from 'react'
import {isTouchScreen, remToPx} from './utils'
import {useRecoilValue, useSetRecoilState} from 'recoil'
import produce from 'immer'
import {useSortable} from '@dnd-kit/sortable'
import {CSS} from '@dnd-kit/utilities'
import {logEvent} from 'firebase/analytics'
import {analytics} from './firebase'

export type BaseLinkCardProps = {
  link: Link,
  showPinned: boolean, // if false, only show pin when hovered
  onPinClicked: () => void,
  disabled: boolean,
  showDragHandle: boolean,
  className?: string,
}

function OpenInNewIcon(props: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path
      d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
  </svg>
}

function PinOutlinedIcon(props: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <g>
      <rect fill="none" height="24" width="24"/>
    </g>
    <g>
      <path
        d="M14,4v5c0,1.12,0.37,2.16,1,3H9c0.65-0.86,1-1.9,1-3V4H14 M17,2H7C6.45,2,6,2.45,6,3c0,0.55,0.45,1,1,1c0,0,0,0,0,0l1,0v5 c0,1.66-1.34,3-3,3v2h5.97v7l1,1l1-1v-7H19v-2c0,0,0,0,0,0c-1.66,0-3-1.34-3-3V4l1,0c0,0,0,0,0,0c0.55,0,1-0.45,1-1 C18,2.45,17.55,2,17,2L17,2z"/>
    </g>
  </svg>
}

function PinFilledIcon(props: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <g>
      <rect fill="none" height="24" width="24"/>
    </g>
    <g>
      <path
        d="M16,9V4l1,0c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H7C6.45,2,6,2.45,6,3v0 c0,0.55,0.45,1,1,1l1,0v5c0,1.66-1.34,3-3,3h0v2h5.97v7l1,1l1-1v-7H19v-2h0C17.34,12,16,10.66,16,9z"
        fillRule="evenodd"/>
    </g>
  </svg>
}

const BaseLinkCard = forwardRef<HTMLAnchorElement, BaseLinkCardProps>((props, ref) => {
  const link = props.link
  return <a
    draggable={false}
    ref={ref}
    className={'h-full relative group shadow-md hover:shadow-xl bg-white dark:bg-gray-600 rounded-md duration-100 flex justify-start items-center p-2 overflow-hidden ' + (props.className ?? '')}
    href={link.url}
    target="_blank"
    rel="noreferrer"
    onClick={(e) => {
      if (props.disabled) e.preventDefault()
    }}>
    {link.iconUrl ? <img className={'w-12 h-12 rounded-md'} src={link.iconUrl} alt={''}/> : null}
    <div className={'flex flex-col flex-1 min-w-0 pl-2'}>
      <span className={'text-xl font-medium truncate dark:text-gray-100'}
            title={props.link.title}>
        {link.title}
        <OpenInNewIcon className={'w-5 h-5 ml-1 mb-0.5 inline duration-100 opacity-0 group-hover:opacity-40'}/>
      </span>
      <span className={'text-gray-500 dark:text-gray-350 truncate'}>{link.description ?? link.title}</span>
    </div>
    <div
      className={'absolute right-0 top-0 h-full w-20 duration-100 bg-gradient-to-l from-white dark:from-gray-600 via-white dark:via-gray-600 ' + (props.showPinned ? '' : 'opacity-0 group-hover:opacity-100')}/>
    <button
      className={'absolute right-0 top-0 h-full w-14 flex items-center justify-center duration-100 group-hover:opacity-50 hover:bg-gray-300 dark:hover:bg-gray-500 ' + (props.showPinned ? 'opacity-50' : 'opacity-0')}
      title={link.pinned ? 'Unpin this link' : 'Pin this link'}
      onClick={(e) => {
        e.preventDefault()
        props.onPinClicked()
      }}>
      {link.pinned ?
        <PinFilledIcon className={'w-8 h-8 text-black dark:text-white'}/> :
        <PinOutlinedIcon className={'w-8 h-8 text-black dark:text-white transform rotate-45'}/>}
    </button>
  </a>
})

export type LinkCardProps = { linkID: string, isDragging?: boolean, section: 'pinned' | 'links', elemAttributes?: object, invisible?: boolean }

export const LinkCard = forwardRef<HTMLDivElement, LinkCardProps>((props, ref) => {
  const linksMap = useRecoilValue(linksMapState)
  const setPinnedLinkIDs = useSetRecoilState(pinnedLinkIDsState)
  const [scale, setScale] = useState<boolean>(props.isDragging === true)

  const link = linksMap.get(props.linkID)!
  return <div
    onMouseUp={() => setScale(false)}
    onTouchEnd={() => setScale(false)}
    className={'p-2 md:p-4 min-w-0 ' + (props.invisible ? 'opacity-0 ' : '')}
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
      className={(scale ? 'transform scale-110 opacity-80 ' : '') + (props.section === 'pinned' ? 'no-long-press' : '')}
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
              logEvent(analytics, 'pin_link', {id: props.linkID})
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
