import {DraggableLinkCard, DraggingLinkCard, useGridColumns} from './LinkCard'
import React, {useState} from 'react'
import {pinnedLinkIDsState} from './Link'
import {SectionTitle} from './SectionTitle'
import {useRecoilState} from 'recoil'
import {closestCenter, DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core'
import {DragEndEvent} from '@dnd-kit/core/dist/types'
import {arrayMove, SortableContext} from '@dnd-kit/sortable'

export function PinnedSection() {
  const gridColumns = useGridColumns()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [pinnedLinkIDs, setPinnedLinkIDs] = useRecoilState(pinnedLinkIDsState)
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 1,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 300,
        tolerance: 5,
      },
    }),
  )

  if (pinnedLinkIDs.length === 0) return null

  const handleDragEnd = (event: DragEndEvent) => {
    const {active, over} = event

    if (active.id !== over!.id) {
      setPinnedLinkIDs((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over!.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  return <div className={'bg-gray-200 dark:bg-gray-800 pt-4 pb-6 md:pb-4 pl-4 pr-4 anchor-none duration-100'}>
    <SectionTitle>
      Pinned
      <span
        className={'text-gray-500 dark:text-gray-400 text-base md:pl-2 block md:inline font-normal'}>Drag and drop to rearrange cards.</span>
    </SectionTitle>
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={e => setActiveId(e.active.id)}
      onDragEnd={handleDragEnd}>
      <SortableContext
        items={pinnedLinkIDs}>
        <div className={'grid'} style={{gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}>
          {pinnedLinkIDs.map(id => <DraggableLinkCard key={id} linkID={id}/>)}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeId ? <DraggingLinkCard linkID={activeId}/> : null}
      </DragOverlay>
    </DndContext>
  </div>
}
