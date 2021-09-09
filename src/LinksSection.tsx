import {BaseLinkCard} from './BaseLinkCard'
import React from 'react'
import {Link} from './Link'
import favicon from './favicon.png'
import {MuuriComponent} from 'muuri-react'

function LinksCard(props: { link: Link }) {
  return <div className={'h-16 m-4'} style={{width: 'calc(33% - 2rem)'}}>
    <BaseLinkCard
      link={props.link}
      showPinned={props.link.pinned}
      onPinClicked={() => {
      }}
      disabled={false}/>
  </div>
}

export function LinksSection() {
  const links = [
    new Link('a', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', false),
    new Link('b', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', false),
    new Link('c', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('d', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', false),
  ]

  return <>
    <p>Links</p>
    <MuuriComponent>
      {links.map(link => <LinksCard key={link.id} link={link}/>)}
    </MuuriComponent>
  </>
}
