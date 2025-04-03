//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

'use client'

import { Button } from '@stanfordspezi/spezi-web-design-system/components/Button'
//import Image from 'next/image'
import { generateGreeting } from '@stanfordbdhg/example-package'
import { SpeziProvider } from '@stanfordspezi/spezi-web-design-system'

export default function Home() {
  const greeting = generateGreeting()

  return (
    <SpeziProvider>
      <div className="flex min-h-screen items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="mt-4 text-center text-3xl">{`${greeting.message} to ${greeting.project}`}</h1>
          <Button size="lg">Log in</Button>
          <Button size="lg">Sign Up</Button>
        </div>
      </div>
    </SpeziProvider>
  )
}
