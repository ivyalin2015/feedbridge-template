//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

'use client'

import { DatePicker, Select } from '@stanfordspezi/spezi-web-design-system'
import { useState } from 'react'

export default function feedData() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  return (
    <div className="flex min-h-screen items-start justify-center">
      <div className="flex flex-col items-center space-y-9">
        <h1 className="mt-4 text-center text-3xl">Feed Data</h1>
        <h2 className="mt-30 text-left text-2xl">Overview</h2>
        <DatePicker
          mode="single"
          selected={date}
          onSelect={setDate}
          className="bg-white"
        />
        <Select></Select>
        <h2 className="mt-30 text-left text-2xl">Milk Type</h2>
        <h2 className="mt-30 text-left text-2xl">Measurement</h2>
      </div>
    </div>
  )
}
