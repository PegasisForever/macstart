import {LinkCard, useCardWidth} from './LinkCard'
import React from 'react'
import {MuuriComponent} from 'muuri-react'
import {SectionTitle} from './SectionTitle'
import {useRecoilValue} from 'recoil'
import {linkSectionsState} from './Link'

export function LinksSection() {
  const cardWidth = useCardWidth()
  const linksSections = useRecoilValue(linkSectionsState)

  return <>
    {linksSections.map(({name, links}) => <div key={name} className={'pl-4 pr-4'}>
      <SectionTitle className={'mt-4 md:mt-8'} showDivider>{name}</SectionTitle>
      <MuuriComponent addOptions={{show: false}}>
        {links.map(({id}) =>
          <LinkCard key={id}
                    linkID={id}
                    width={cardWidth}
                    section={'links'}/>)}
      </MuuriComponent>
    </div>)}
  </>
}
