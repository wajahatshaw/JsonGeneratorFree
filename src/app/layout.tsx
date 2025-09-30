import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JsonGeneratorFree - AI-Powered Mock Data Generator',
  description: 'Generate realistic mock data from your source code. Modern JSON Generator & Mock Data Creator.',
  keywords: 'json generator, mock data, api testing, fake data, json schema',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
