import {atom, useRecoilState} from 'recoil'
import {useHotkeys} from 'react-hotkeys-hook'
import {useRef} from 'react'

export const searchTextState = atom<string>({
  key: 'searchTextState',
  default: '',
})

function SearchIcon(props: { className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" className={props.className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path
      d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
}

export function SearchBar() {
  const [text, setText] = useRecoilState(searchTextState)
  const inputRef = useRef<HTMLInputElement>(null)
  useHotkeys('ctrl+f', (e) => {
    e.preventDefault()
    inputRef.current?.focus()
  })

  return <div className={'px-8 mb-8'}>
    <div
      className={'inline-block flex w-full md:w-[32rem] md:ml-auto md:mr-auto duration-100 bg-white dark:text-gray-100 border-2 border-white dark:bg-gray-700 dark:focus-within:bg-gray-600 dark:border-gray-400 dark:focus-within:border-gray-100 rounded-md shadow-lg focus-within:shadow-2xl'}>
      <SearchIcon className={'flex-none w-8 h-8 m-2'}/>
      <input className={'flex-grow h-12 bg-transparent text-xl outline-none'} type="text" value={text}
             ref={inputRef}
             onChange={e => setText(e.target.value)}/>
    </div>
  </div>
}
