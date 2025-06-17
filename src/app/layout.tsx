import { Metadata } from 'next'

import '@/styles/globals.scss'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`selection:bg-[#ecc79c38]`}>{children}</body>
    </html>
  )
}
