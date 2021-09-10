import {UndraggableLinkCard, useGridColumns} from './LinkCard'
import React from 'react'
import {SectionTitle} from './SectionTitle'
import {useRecoilValue} from 'recoil'
import {linkSectionsState, linksMapState} from './Link'
import {searchTextState} from './SearchBar'

export function LinksSection() {
  const gridColumns = useGridColumns()
  const linksSections = useRecoilValue(linkSectionsState)
  const searchText = useRecoilValue(searchTextState)
  const linksMap = useRecoilValue(linksMapState)

  return <>
    {linksSections.map(({name, links}) => <div key={name} className={'pl-4 pr-4 mt-4 md:mt-8'}>
      <SectionTitle showDivider>{name}</SectionTitle>
      <div className={'grid'} style={{gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}>
        {links.map(link => <UndraggableLinkCard key={link.id} linkID={link.id}/>)}
      </div>
    </div>)}
  </>
}
