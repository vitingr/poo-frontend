import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={inter.className} lang="pt">
      <body className={`selection:bg-[#c59cec38]`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
