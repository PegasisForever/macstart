import 'web-animations-js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {PinnedSection} from './PinnedSection'
import {LinksSection} from './LinksSection'
import {PegaFooter} from './Footer'
import {RecoilRoot} from 'recoil'
import {enableMapSet} from 'immer'
import {PinnedLinkIDsSubscriber} from './Link'

enableMapSet()

function App() {
  return <div>
    <h1 className={'text-center text-6xl md:text-8xl mb-4 md:mb-8 mt-2 md:mt-4'}>
      MacStart
      <span className={'text-2xl md:text-4xl bg-yellow-600 text-white rounded-lg ml-2 md:ml-4 pl-1 pr-1'}>
        beta
      </span>
    </h1>
    <PinnedSection/>
    <LinksSection/>
    <PegaFooter/>
    <PinnedLinkIDsSubscriber/>
  </div>
}

ReactDOM.render(
  <RecoilRoot>
    <App/>
  </RecoilRoot>,
  document.getElementById('root'),
)
