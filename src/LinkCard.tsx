import pinOutlined from './icons/pin_outline.svg'
import pinFilled from './icons/pin_filled.svg'

export type LinkCardProps = {
  link: string,
  displayText: string,
  pinned?: boolean
  onPinning?: () => void,
  description?: string,
  iconUrl?: string,
}

export function LinkCard(props: LinkCardProps) {
  return <a
    className={'relative group flex-1 shadow-md hover:shadow-xl bg-white rounded-md duration-100 m-4 max-w-card min-w-card flex justify-start items-start p-2 overflow-hidden'}
    href={props.link}
    target="_blank">
    <img className={'w-12 h-12 rounded-md'} src={props.iconUrl} alt={''}/>
    <div className={'flex flex-col pl-2'} style={{marginTop: '-0.25rem'}}>
      <span className={'text-xl font-medium'}>{props.displayText}</span>
      <span className={'text-gray-500'}>{props.link}</span>
      {props.description ? <span>{props.description}</span> : null}
    </div>
    <button
      className={'absolute right-0 top-0 h-full w-14 flex items-center justify-center duration-100 group-hover:opacity-50 hover:bg-gray-300 ' + (props.pinned ? 'opacity-50' : 'opacity-0')}
      title={props.pinned ? 'Unpin this link' : 'Pin this link'}
      onClick={(e) => {
        e.preventDefault()
        props.onPinning?.()
      }}>
      <img className={'w-8 h-8'} src={props.pinned ? pinFilled : pinOutlined}/>
    </button>
  </a>
}

export function LinkCardPlaceholder() {
  return <div className={'flex-1 ml-4 mr-4 pl-2 pr-2 max-w-card min-w-card'}/>
}
