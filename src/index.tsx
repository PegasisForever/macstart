import 'web-animations-js'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {PinnedSection} from './PinnedSection'
import {LinksSection} from './LinksSection'


function App() {
  return <div>
    <PinnedSection/>
    <LinksSection/>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'),
)
