'use client'

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { firebaseConfig } from './config'

// export const env = {
//   VITE_PUBLIC_EMULATOR: process.env.VITE_PUBLIC_EMULATOR === 'true',
// }

export const app = initializeApp(firebaseConfig)
export const authen = getAuth(app)
const enableEmulation = process.env.NEXT_PUBLIC_EMULATOR === 'true'
if (enableEmulation)
  connectAuthEmulator(authen, 'http://127.0.0.1:9099', {
    disableWarnings: true,
  })
export const googleProvider = new GoogleAuthProvider()

if (enableEmulation) {
  connectAuthEmulator(authen, 'http://127.0.0.1:9099', {
    disableWarnings: true,
  })

  const db = getFirestore(app)
  connectFirestoreEmulator(db, '127.0.0.1', 8080)

  const functions = getFunctions(app)
  connectFunctionsEmulator(functions, '127.0.0.1', 5001)
}

export const db = getFirestore(app)
export const functions = getFunctions(app)
