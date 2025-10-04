import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JsonGeneratorFree - AI-Powered Mock Data Generator',
  description: 'Generate realistic mock data from your source code. Modern JSON Generator & Mock Data Creator. Free tool for developers.',
  keywords: 'json generator, mock data, api testing, fake data, json schema, typescript mock data, javascript mock data, free json generator',
  authors: [{ name: 'JsonGeneratorFree Team' }],
  creator: 'JsonGeneratorFree',
  publisher: 'JsonGeneratorFree',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jsongeneratorfree.com',
    siteName: 'JsonGeneratorFree',
    title: 'JsonGeneratorFree - AI-Powered Mock Data Generator',
    description: 'Generate realistic mock data from your source code. Modern JSON Generator & Mock Data Creator.',
    images: [
      {
        url: '/assets/jsongeneratorlogo.png',
        width: 1200,
        height: 630,
        alt: 'JsonGeneratorFree Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JsonGeneratorFree - AI-Powered Mock Data Generator',
    description: 'Generate realistic mock data from your source code. Modern JSON Generator & Mock Data Creator.',
    images: ['/assets/jsongeneratorlogo.png'],
  },
  alternates: {
    canonical: 'https://jsongeneratorfree.com',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1744014731875052"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
