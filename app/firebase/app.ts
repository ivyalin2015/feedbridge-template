'use client'

import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { firebaseConfig } from './config'

export const env = {
  VITE_PUBLIC_EMULATOR: process.env.VITE_PUBLIC_EMULATOR === 'true',
}

export const app = initializeApp(firebaseConfig)
export const authen = getAuth(app)
export const enableEmulation = env.VITE_PUBLIC_EMULATOR
if (enableEmulation)
  connectAuthEmulator(authen, 'http://127.0.0.1:9099', {
    disableWarnings: true,
  })
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)
if (enableEmulation) connectFirestoreEmulator(db, '127.0.0.1', 8080)
const functions = getFunctions(app)
if (enableEmulation) connectFunctionsEmulator(functions, '127.0.0.1', 5001)
