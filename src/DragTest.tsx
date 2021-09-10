import {
  closestCenter,
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import React, {CSSProperties, forwardRef, useState} from 'react'
import {arrayMove, SortableContext, sortableKeyboardCoordinates, useSortable} from '@dnd-kit/sortable'
// @ts-ignore
import {CSS} from '@dnd-kit/utilities'
import {DragEndEvent, DragStartEvent} from '@dnd-kit/core/dist/types'
import {useWindowSize} from 'react-use-size'
import {remToPx} from './utils'
import {DraggableLinkCard, DraggingLinkCard} from './LinkCard'

type ItemProps = SortableItemProps & { style?: CSSProperties, hidden?: boolean, isDragging?: boolean }

const Item = forwardRef<HTMLDivElement, ItemProps>(({text, hidden, isDragging, ...props}, ref) => {
  if (hidden) return <div {...props} ref={ref}/>
  return <div {...props} ref={ref}
              className={'h-20 ring-4 ring-white ring-inset' + (hidden ? ' invisible' : '') + (isDragging ? ' bg-green-500' : ' bg-yellow-500')}>
    {text}
  </div>
})

type SortableItemProps = {
  text: string
}

function DraggableItem(props: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props.text,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return <Item {...props} {...attributes} {...listeners} ref={setNodeRef} style={style as any} hidden={isDragging}/>
}

function useGridColumns() {
  const {width} = useWindowSize()
  const minWidthPx = remToPx(24)
  return Math.max(Math.floor(width / minWidthPx), 1)
}


export function DragTest() {
  const gridColumns = useGridColumns()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [items, setItems] = useState([
    'shec',
    'spark',
    'swhat',
    'silhouette',
    'underground-design',
    'union-market',
    'wgen',
  ])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  function handleDragStart(event: DragStartEvent) {
    const {active} = event

    setActiveId(active.id)
  }

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event

    if (active.id !== over!.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over!.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }

    setActiveId(null)
  }

  return <DndContext
    sensors={sensors}
    collisionDetection={closestCenter}
    onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}>
    <SortableContext
      items={items}>
      <div className={'grid'} style={{gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}>
        {items.map(id => <DraggableLinkCard key={id} linkID={id}/>)}
        {/*{items.map(id => <DraggableItem key={id} text={id}/>)}*/}
      </div>
    </SortableContext>
    <DragOverlay>
      {activeId ? <DraggingLinkCard linkID={activeId}/> : null}
    </DragOverlay>
  </DndContext>
}
