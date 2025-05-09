//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

'use client'

import {
  Button,
  SignInForm,
  SpeziProvider,
} from '@stanfordspezi/spezi-web-design-system'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { generateGreeting } from '@stanfordbdhg/example-package'
import { authen, googleProvider } from './firebase/app'

export default function Home() {
  const greeting = generateGreeting()

  return (
    <SpeziProvider>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center space-y-9">
          <h1 className="mt-4 text-center text-3xl">{`${greeting.message} to ${greeting.project}`}</h1>
          <SignInForm
            auth={authen}
            providers={[{ name: 'Google', provider: googleProvider }]}
            enableEmailPassword={false}
            signInWithPopup={signInWithPopup}
            signInWithEmailAndPassword={signInWithEmailAndPassword}
          />
          <Button>
            <Link href="/feedData">Input Feed Data</Link>
          </Button>
          <Button>
            <Link href="/diaperEntry">Log Wet Diaper Entry</Link>
          </Button>
        </div>
      </div>
    </SpeziProvider>
  )
}
