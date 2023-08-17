import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HomePage from '@/tsx-modules/Home/HomePage'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TextoVid',
  description: 'TextoVid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <HomePage>
          <div className="inner-page">
            {children}
          </div>
        </HomePage>
      </body>
    </html>
  )
}
