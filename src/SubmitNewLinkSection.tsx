import {submitNewLink} from './firebase'

export function SubmitNewLinkSection() {
  return <button onClick={() => submitNewLink({url: 'awawa', title: 'title', description: 'desc'})}>
    Submit
  </button>
}
