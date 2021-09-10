import {MuuriComponent} from 'muuri-react'
import {DecoratedItem} from 'muuri-react/src/interfaces/item'
import {DraggerCancelEvent, DraggerEndEvent, DraggerMoveEvent, DraggerStartEvent} from 'muuri-react/src/muuri'
import {LinkCard, useCardWidth} from './BaseLinkCard'
import React, {Ref, useRef} from 'react'
import {pinnedLinkIDsState} from './Link'
import {SectionTitle} from './SectionTitle'
import {useRecoilState} from 'recoil'
import {DecoratedGrid} from 'muuri-react/dist/types/interfaces'

export function PinnedSection() {
  const cardWidth = useCardWidth()
  const [pinnedLinkIDs, setPinnedLinkIDs] = useRecoilState(pinnedLinkIDsState)
  const gridRef = useRef<DecoratedGrid>()

  if (pinnedLinkIDs.length === 0) return null

  return <div className={'bg-gray-200 pt-4 pb-2 pl-4 pr-4'}>
    <SectionTitle>Pinned</SectionTitle>
    <MuuriComponent sort={pinnedLinkIDs}
                    ref={gridRef as Ref<DecoratedGrid>}
                    addOptions={{show: false}}
                    dragEnabled
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
                    }}
                    onDragEnd={item => {
                      const linkOrder = item.getGrid().getItems().map(item => item.getKey() as string)
                      setPinnedLinkIDs(linkOrder)
                    }}>
      {pinnedLinkIDs.map(id => <LinkCard key={id} linkID={id} width={cardWidth} section={'pinned'}/>)}
    </MuuriComponent>
  </div>
}
