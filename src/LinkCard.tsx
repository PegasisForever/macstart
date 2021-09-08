export type LinkCardProps = {
  link: string,
  displayText: string,
  description?: string,
  iconUrl?: string,
}

export function LinkCard(props: LinkCardProps) {
  return <a
    className={'flex-1 shadow-md hover:shadow-xl bg-white rounded-md duration-100 m-4 max-w-card min-w-card flex justify-start items-start p-2'}
    href={props.link}
    target="_blank">
    <img className={'w-12 h-12 rounded-md'} src={props.iconUrl} alt={''}/>
    <div className={'flex flex-col pl-2'} style={{marginTop: '-0.25rem'}}>
      <span className={'text-xl font-medium'}>{props.displayText}</span>
      <span className={'text-gray-500'}>{props.link}</span>
      {props.description ? <span>{props.description}</span> : null}
    </div>
  </a>
}
