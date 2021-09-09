import {MuuriComponent} from 'muuri-react'
import {DecoratedItem} from 'muuri-react/src/interfaces/item'
import {DraggerCancelEvent, DraggerEndEvent, DraggerMoveEvent, DraggerStartEvent} from 'muuri-react/src/muuri'
import {LinkCard, useCardWidth} from './BaseLinkCard'
import favicon from './favicon.png'
import React from 'react'
import {Link} from './Link'
import {SectionTitle} from './SectionTitle'

export function PinnedSection() {
  const cardWidth = useCardWidth()
  const links = [
    new Link('a', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('b', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('c', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('d', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
  ]

  return <div className={'bg-gray-200 pt-4 pb-2'}>
    <SectionTitle>Pinned</SectionTitle>
    <MuuriComponent dragEnabled
                    dragFixed
                    dragStartPredicate={(item: DecoratedItem, e: DraggerStartEvent | DraggerMoveEvent | DraggerEndEvent | DraggerCancelEvent) => {
                      const isTouch = (e.srcEvent instanceof TouchEvent) || (e.srcEvent instanceof PointerEvent && e.srcEvent.pointerType !== 'mouse')
                      if (isTouch) {
                        // fixme
                        // if (e.deltaTime > 300) return e.deltaX === 0 && e.deltaY === 0
                        if (e.deltaTime > 300) return true
                      } else {
                        if (e.type === 'move') return true
                      }
                    }}>
      {links.map(link => <LinkCard key={link.id} link={link} width={cardWidth} section={'pinned'} onPinClicked={() => {
      }}/>)}
    </MuuriComponent>
  </div>
}
