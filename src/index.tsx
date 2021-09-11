import 'web-animations-js'
import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {PinnedSection} from './PinnedSection'
import {LinksSection} from './LinksSection'
import {PegaFooter} from './Footer'
import {RecoilRoot} from 'recoil'
import {enableMapSet} from 'immer'
import {PinnedLinkIDsSubscriber} from './Link'
import {SearchBar} from './SearchBar'
import {DarkModeToggle} from './DarkModeToggle'

enableMapSet()

function App() {
  const [isDark, setIsDark] = useState(!!(localStorage.getItem('dark') ?? window.matchMedia('(prefers-color-scheme: dark)').matches))
  useEffect(() => {
    if (isDark) {
      localStorage.setItem('dark', '1')
    } else {
      localStorage.removeItem('dark')
    }
    document.documentElement.className = isDark ? 'dark' : ''
  }, [isDark])

  return <div>
    <DarkModeToggle isDark={isDark} onToggle={setIsDark}/>
    <h1 className={'text-center text-6xl md:text-8xl mb-4 md:mb-8 mt-2 md:mt-4 dark:text-gray-100'}>
      MacStart
      <span
        className={'text-2xl md:text-4xl bg-yellow-600 text-white dark:text-gray-100 rounded-md md:rounded-lg ml-2 md:ml-4 pl-1 pr-1'}>
        beta
      </span>
    </h1>
    <SearchBar/>
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
