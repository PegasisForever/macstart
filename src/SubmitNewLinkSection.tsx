import {Fragment, useState} from 'react'
import {Dialog} from '@headlessui/react'
import produce from 'immer'

function TextInput(props: { label: string, id: string, placeholder: string, value: string, onChange: (newValue: string) => void }) {
  return <div className={'flex items-center'}>
    <label htmlFor={props.id}>{props.label}</label>
    <input type="text" id={props.id} value={props.value} placeholder={props.placeholder}
           onChange={e => props.onChange(e.target.value)}/>
  </div>
}

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

export function SubmitNewLinkSection() {
  let [isOpen, setIsOpen] = useState(true)
  let [textState, setTextState] = useState({
    urlText: '',
    titleText: '',
    descriptionText: '',
  })
  let [shouldSubmit, setShouldSubmit] = useState(false)

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
  return <>
    <button onClick={() => setIsOpen(true)}>
      Submit
    </button>
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center p-8">
      <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm"/>
      <div className={'relative z-20 flex flex-col items-start shadow-xl bg-white rounded-md mx-auto p-4'}>
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
            className={'rounded-md duration-100 hover:bg-gray-300 px-4 py-2 mr-4'}
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
    </Dialog>
  </>
}
