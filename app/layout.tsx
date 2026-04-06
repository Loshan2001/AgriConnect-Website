import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AgriConnect — AI-Based Onion Crop Monitoring System',
  description: 'An intelligent mobile platform for disease detection, yield prediction, risk mapping, and stress analysis. Research project by SLIIT 2026.',
  keywords: 'AgriConnect, onion crop monitoring, AI agriculture, disease detection, yield prediction, SLIIT',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
