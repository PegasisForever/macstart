import React, {ReactNode} from 'react'

export function SectionTitle(props: { children: ReactNode, showDivider?: boolean }) {
  return <div
    className={'flex flex-row items-center ml-2 md:ml-4 mr-2 md:mr-4 justify-center md:justify-start'}>
    <p className={'flex-1 md:flex-none text-2xl text-center md:text-left font-medium md:mr-4'}>
      {props.children}
    </p>
    {props.showDivider ? <div className={'flex-grow bg-gray-400 h-px hidden md:block'}/> : null}
  </div>
}
