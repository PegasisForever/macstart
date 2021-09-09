import {MuuriComponent, useDrag} from 'muuri-react'
import {DecoratedItem} from 'muuri-react/src/interfaces/item'
import {DraggerCancelEvent, DraggerEndEvent, DraggerMoveEvent, DraggerStartEvent} from 'muuri-react/src/muuri'
import {BaseLinkCard} from './BaseLinkCard'
import favicon from './favicon.png'
import React from 'react'
import {Link} from './Link'

function PinnedLinkCard(props: { link: Link }) {
  const isDragging = useDrag()

  return <div className={'h-16 m-4'} style={{width: 'calc(33% - 2rem)'}}>
    <div className={'relative'}>
      <BaseLinkCard
        link={props.link}
        showPinned={false}
        onPinClicked={() => {
        }}
        disabled={isDragging}/>
    </div>
  </div>
}

export function PinnedSection() {
  const links = [
    new Link('a', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('b', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('c', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
    new Link('d', 'Pegas.is', 'https://pegas.is', favicon, 'awawa', true),
  ]

  return <>
    <p>Pinned</p>
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
      {links.map(link => <PinnedLinkCard key={link.id} link={link}/>)}
    </MuuriComponent>
  </>
}
