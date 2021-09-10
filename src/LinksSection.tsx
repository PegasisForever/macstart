import {LinkCard, useCardWidth} from './LinkCard'
import React from 'react'
import {MuuriComponent} from 'muuri-react'
import {SectionTitle} from './SectionTitle'
import {useRecoilValue} from 'recoil'
import {linkSectionsState, linksMapState} from './Link'
import {searchTextState} from './SearchBar'

export function LinksSection() {
  // const cardWidth = useCardWidth()
  // const linksSections = useRecoilValue(linkSectionsState)
  // const searchText = useRecoilValue(searchTextState)
  // const linksMap = useRecoilValue(linksMapState)
  //
  // const propsToData = (props: any) => ({
  //   linkID: props.linkID,
  // })
  //
  // const filter = (item: any) => {
  //   if (searchText === '') return true
  //   const linkID = item.linkID as string
  //   return linksMap.get(linkID)!.includes(searchText)
  // }
  //
  // return <>
  //   {linksSections.map(({name, links}) => <div key={name} className={'pl-4 pr-4 mt-4 md:mt-8'}>
  //     <SectionTitle showDivider>{name}</SectionTitle>
  //     <MuuriComponent
  //       key={`${name}-section-muuri`}
  //       addOptions={{show: false}}
  //       // @ts-ignore
  //       propsToData={propsToData}
  //       filter={filter}>
  //       {links.map(({id}) =>
  //         <LinkCard key={id}
  //                   linkID={id}
  //                   width={cardWidth}
  //                   section={'links'}/>)}
  //     </MuuriComponent>
  //   </div>)}
  // </>
}
