import {LinkCard, useCardWidth} from './BaseLinkCard'
import React from 'react'
import {Link} from './Link'
import favicon from './favicon.png'
import {MuuriComponent} from 'muuri-react'

export function LinksSection() {
  const cardWidth = useCardWidth()
  const links = [
    new Link('a', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', false),
    new Link('b', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', false),
    new Link('c', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('d', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', false),
  ]

  return <>
    <p>Links</p>
    <MuuriComponent>
      {links.map(link => <LinkCard key={link.id} link={link} width={cardWidth} section={'links'} onPinClicked={() => {
      }}/>)}
    </MuuriComponent>
  </>
}
