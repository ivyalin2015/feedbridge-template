//
// This source file is part of the Stanford Biodesign Digital Health Next.js Template open-source project
//
// SPDX-FileCopyrightText: 2023 Stanford University and the project authors (see CONTRIBUTORS.md)
//
// SPDX-License-Identifier: MIT
//

import { tailwindColors } from "@stanfordspezi/spezi-web-design-system"
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@stanfordspezi/spezi-web-design-system/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        colors: tailwindColors,
    },
  },
  plugins: [],
}
