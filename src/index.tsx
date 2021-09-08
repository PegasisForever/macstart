import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {LinkCard} from './LinkCard'
import favicon from './favicon.png'

function App() {
  return <div className={'flex flex-wrap justify-center items-start'}>
    <LinkCard link={'https://pegas.is'} displayText={'Pegas.is'} description={"awawa"} iconUrl={favicon}/>
    <LinkCard link={'https://pegas.is'} displayText={'Pegas.is'} iconUrl={favicon}/>
    <LinkCard link={'https://pegas.is'} displayText={'Pegas.is'} iconUrl={favicon}/>
    <LinkCard link={'https://pegas.is'} displayText={'Pegas.is'} iconUrl={favicon}/>
  </div>
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root'),
)
