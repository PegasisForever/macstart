import {ReactNode} from 'react'
import React from 'react'

export function SectionTitle(props: { children: ReactNode, className?: string }) {
  return <p className={'ml-4 text-2xl ' + (props.className ?? '')}>
    {props.children}
  </p>
}
