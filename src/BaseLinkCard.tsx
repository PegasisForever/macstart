import pinOutlined from './icons/pin_outline.svg'
import pinFilled from './icons/pin_filled.svg'
import {Link} from './Link'
import {useDrag, useRefresh} from 'muuri-react'
import {useWindowSize} from 'react-use-size'
import {useMemo} from 'react'
import {remToPx} from './utils'
import openInNewIcon from './icons/open_in_new_outline.svg'

export type BaseLinkCardProps = {
  link: Link,
  showPinned: boolean, // if false, only show pin when hovered
  onPinClicked: () => void,
  disabled: boolean,
}

function BaseLinkCard(props: BaseLinkCardProps) {
  const link = props.link
  return <a
    className={'link-card relative group shadow-md hover:shadow-xl bg-white rounded-md duration-100 w-full h-full flex justify-start items-center p-2 overflow-hidden'}
    href={link.url}
    target="_blank"
    rel="noreferrer"
    onClick={(e) => {
      if (props.disabled) e.preventDefault()
    }}>
    {link.iconUrl ? <img className={'w-12 h-12 rounded-md'} src={link.iconUrl} alt={''}/> : null}
    <div className={'flex flex-col flex-1 min-w-0 pl-2'}>
      <span className={'text-xl font-medium truncate'}>
        {link.title}
        <img className={'w-5 h-5 ml-1 mb-0.5 inline duration-100 opacity-0 group-hover:opacity-40'} src={openInNewIcon}
             alt=""/>
      </span>
      <span className={'text-gray-500 truncate'}>{link.description}</span>
    </div>
    <div
      className={'absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white opacity-0 group-hover:opacity-100 duration-100'}/>
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
}

export function LinkCard(props: { link: Link, width: string, section: 'pinned' | 'links', onPinClicked: () => void }) {
  const isDragging = useDrag()
  useRefresh([props.width])

  return <div className={'h-16 m-4'} style={{width: props.width}}>
    <div className={'relative'}>
      <BaseLinkCard
        link={props.link}
        showPinned={props.section === 'pinned' ? false : props.link.pinned}
        onPinClicked={props.onPinClicked}
        disabled={isDragging}/>
    </div>
  </div>
}

export function useCardWidth() {
  const {width} = useWindowSize()
  return useMemo(() => {
    const minWidthPx = remToPx(24)
    const columnCount = Math.max(Math.floor(width / minWidthPx), 1)
    return `calc(${1 / columnCount * 100 - 0.2}% - 2rem)`
  }, [width])
}