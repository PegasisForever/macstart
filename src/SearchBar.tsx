import searchIcon from './icons/search.svg'
import {atom, useRecoilState} from 'recoil'

export const searchTextState = atom<string>({
  key: 'searchTextState',
  default: '',
})

export function SearchBar() {
  const [text, setText] = useRecoilState(searchTextState)

  return <div className={'pl-6 pr-6 mb-8'}>
    <div
      className={'inline-block flex w-full md:w-128 md:ml-auto md:mr-auto bg-white rounded-md duration-100 shadow-lg focus-within:shadow-2xl'}>
      <img className={'flex-none w-8 h-8 m-2'} src={searchIcon} alt=""/>
      <input className={'flex-grow h-12 bg-transparent text-xl outline-none'} type="text" value={text}
             onChange={e => setText(e.target.value)}/>
    </div>
  </div>
}
