import React, {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import produce from 'immer'
import {SectionTitle} from './SectionTitle'
import {useGridColumns} from './LinkCard'

type TextInputListProps = {
  inputs: Array<{
    id: string,
    label: string,
    placeholder: string,
  }>,
  values: {
    [k: string]: string
  },
  onChange: (newValues: { [k: string]: string }) => void,
}

function TextInputList(props: TextInputListProps) {
  return <>
    {props.inputs.map(({id, label, placeholder}) => <Fragment key={id}>
      <label className={'justify-self-end self-center'} htmlFor={id}>{label}</label>
      <input type="text" id={id} value={props.values[id]} placeholder={placeholder}
             className={'border-none focus:ring-0 outline-none rounded-sm duration-100 bg-gray-100 focus:bg-gray-200'}
             onChange={e => props.onChange(produce(props.values, draft => {
               draft[id] = e.target.value
             }))}/>
    </Fragment>)}
  </>
}

function AddIcon(props: { className?: string }) {
  return <svg className={props.className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
}

export function SubmitNewLinkSection() {
  let [isOpen, setIsOpen] = useState(false)
  let [textState, setTextState] = useState({
    urlText: '',
    titleText: '',
    descriptionText: '',
  })
  let [shouldSubmit, setShouldSubmit] = useState(false)
  const gridColumns = useGridColumns()

  const inputs = [
    {
      id: 'urlText',
      label: 'URL:',
      placeholder: 'https://example.com',
    },
    {
      id: 'titleText',
      label: 'Title:',
      placeholder: 'Example Website',
    },
    {
      id: 'descriptionText',
      label: 'Description:',
      placeholder: 'A simple placeholder website.',
    },
  ]

  // submitNewLink({url: 'awawa', title: 'title', description: 'desc'})
  return <div className={'pl-4 pr-4 mt-4 md:mt-8'}>
    <SectionTitle showDivider>Can't find your link?</SectionTitle>
    <div className={'grid'} style={{gridTemplateColumns: `repeat(${gridColumns}, 1fr)`}}>
      <button
        className={'duration-100 bg-gray-150 hover:bg-gray-250 m-2 md:m-4 h-16 rounded-md border-4 border-gray-400 border-dashed flex justify-center items-center text-gray-800'}
        onClick={() => setIsOpen(!isOpen)}>
        <AddIcon className={'w-8 h-8'}/>
        <span className={'text-lg'}>Add a New Link</span>
      </button>
    </div>

    <Transition
      show={isOpen}
      as={Fragment}>
      <Dialog
        onClose={() => setIsOpen(false)}
        className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center p-8">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"/>
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <div className={'relative z-20 flex flex-col items-start shadow-xl bg-white rounded-md p-4'}>
            <Dialog.Title className={'text-xl font-medium mb-4'}>Add a New Link</Dialog.Title>
            <div className={'grid auto-rows-max w-full gap-y-4 gap-x-2'}
                 style={{gridTemplateColumns: 'auto 1fr'}}>
              <TextInputList inputs={inputs} values={textState as any} onChange={setTextState as any}/>
              <input
                className={'rounded-sm justify-self-end self-center mr-1 focus:ring-transparent text-blue-500'}
                type="checkbox"
                id="share-checkbox"
                checked={shouldSubmit}
                onChange={e => setShouldSubmit(e.target.checked)}
              />
              <label className={'min-w-0'} htmlFor="share-checkbox">
                I would like to share this link with every MacStart user.
              </label>
            </div>

            <div className={'flex justify-end w-full mt-4'}>
              <button
                className={'rounded-md duration-100 hover:bg-gray-200 px-4 py-2 mr-4'}
                onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button
                className={'rounded-md duration-100 bg-blue-150 hover:bg-blue-300 px-4 py-2'}
                onClick={() => setIsOpen(false)}>
                Add
              </button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  </div>
}
