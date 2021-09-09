import pinOutlined from './icons/pin_outline.svg'
import pinFilled from './icons/pin_filled.svg'
import {Link} from './Link'

export type BaseLinkCardProps = {
  link: Link,
  showPinned: boolean, // if false, only show pin when hovered
  onPinClicked: () => void,
  disabled: boolean,
}

export function BaseLinkCard(props: BaseLinkCardProps) {
  const link = props.link
  return <a
    className={'link-card relative group shadow-md hover:shadow-xl bg-white rounded-md duration-100 w-full h-full flex justify-start items-center p-2 overflow-hidden'}
    href={link.url}
    target="_blank"
    rel="noreferrer"
    onClick={(e) => {
      if (props.disabled) e.preventDefault()
    }}>
    <img className={'w-12 h-12 rounded-md'} src={link.iconUrl} alt={''}/>
    <div className={'flex flex-col pl-2'}>
      <span className={'text-xl font-medium'}>{link.title}</span>
      <span className={'text-gray-500'}>{link.description}</span>
    </div>
    <button
      className={'absolute right-0 top-0 h-full w-14 flex items-center justify-center duration-100 group-hover:opacity-50 hover:bg-gray-300 ' + (props.showPinned ? 'opacity-50' : 'opacity-0')}
      title={link.pinned ? 'Unpin this link' : 'Pin this link'}
      onClick={(e) => {
        e.preventDefault()
        props.onPinClicked?.()
      }}>
      <img className={'w-8 h-8'} src={link.pinned ? pinFilled : pinOutlined} alt=""/>
    </button>
  </a>
}
