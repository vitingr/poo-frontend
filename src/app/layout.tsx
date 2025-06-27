import '@/styles/globals.css'

import { getServerSession } from 'next-auth'
import { Inter } from 'next/font/google'

import { Toaster } from '@/components/ui/sonner'
import NextAuthProvider from '@/context/NextAuthProvider'
import { authOptions } from '@/lib/auth'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html className={inter.className} lang="pt">
      <body className={`selection:bg-[#c59cec38]`}>
        <NextAuthProvider session={session}>
          {children}
          <Toaster />
        </NextAuthProvider>
      </body>
    </html>
  )
}
