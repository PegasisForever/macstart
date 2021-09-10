import 'web-animations-js'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {PinnedSection} from './PinnedSection'
import {LinksSection} from './LinksSection'
import {PegaFooter} from './Footer'
import {RecoilRoot} from 'recoil'
import {enableMapSet} from 'immer'
import {PinnedLinkIDsSubscriber} from './Link'
import {useReadyStateEffect} from 'react-ready-state-effect'

enableMapSet()

function App() {
  const [isLoading, setIsLoading] = useState(true)
  useReadyStateEffect(() => {
    setIsLoading(false)
  }, [], 'complete')

  return <div>
    <h1 className={'text-center text-6xl md:text-8xl mb-4 md:mb-8 mt-2 md:mt-4'}>
      MacStart
      <span className={'text-2xl md:text-4xl bg-yellow-600 text-white rounded-md md:rounded-lg ml-2 md:ml-4 pl-1 pr-1'}>
        beta
      </span>
    </h1>
    <PinnedSection/>
    <LinksSection/>
    <PegaFooter/>
    <PinnedLinkIDsSubscriber/>
    {isLoading ? <div className={'z-50 bg-gray-100 fixed top-0 left-0 right-0 bottom-0'}/> : null}
  </div>
}

ReactDOM.render(
  <RecoilRoot>
    <App/>
  </RecoilRoot>,
  document.getElementById('root'),
)
