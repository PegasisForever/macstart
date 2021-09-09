import {LinkCard, useCardWidth} from './BaseLinkCard'
import React from 'react'
import {linksSections} from './Link'
import {MuuriComponent} from 'muuri-react'
import {SectionTitle} from './SectionTitle'

export function LinksSection() {
  const cardWidth = useCardWidth()

  return <>
    {linksSections.map(({name, links}) => <div key={name}>
      <SectionTitle className={'mt-8'}>{name}</SectionTitle>
      <MuuriComponent>
        {links.map(link => <LinkCard key={link.id} link={link} width={cardWidth} section={'links'} onPinClicked={() => {
        }}/>)}
      </MuuriComponent>
    </div>)}
  </>
}
