import 'web-animations-js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {PinnedSection} from './PinnedSection'
import {LinksSection} from './LinksSection'
import {PegaFooter} from './Footer'


function App() {
  return <div>
    <h1 className={'text-center text-8xl m-8'}>
      MacStart
      <span className={'text-4xl bg-yellow-600 text-white rounded-lg ml-4 pl-1 pr-1'}>
        beta
      </span>
    </h1>
    <PinnedSection/>
    <LinksSection/>
    <PegaFooter/>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'),
)
