import {ReactNode} from 'react'

export function SectionTitle(props: { children: ReactNode }) {
  return <p className={'ml-4 text-2xl mt-8'}>
    {props.children}
  </p>
}
