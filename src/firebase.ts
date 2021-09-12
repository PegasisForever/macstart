import {initializeApp} from 'firebase/app'
import {getAnalytics} from 'firebase/analytics'
import {getPerformance} from 'firebase/performance'
import {addDoc, collection, getFirestore, serverTimestamp} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDLp7rkcWUcNX1VH2DlopG7xab7E70HaU4',
  authDomain: 'macstart-pegasis.firebaseapp.com',
  projectId: 'macstart-pegasis',
  storageBucket: 'macstart-pegasis.appspot.com',
  messagingSenderId: '183139419851',
  appId: '1:183139419851:web:db54d59ea4ae5653b1bd4e',
  measurementId: 'G-3LCG3KQVZB',
}

export const firebaseApp = initializeApp(firebaseConfig)
export const analytics = getAnalytics(firebaseApp)
export const performance = getPerformance(firebaseApp)
export const firestore = getFirestore(firebaseApp)

export async function submitNewLink(link: { url: string, title: string, description: string }) {
  await addDoc(collection(firestore, 'link_submissions'), {
    ...link,
    time: serverTimestamp(),
  })
}
