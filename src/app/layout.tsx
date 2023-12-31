import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import AuthProvider from './context/AuthProvider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Supermercados Feliz!',
  description: 'Desenvolvido por Arthur Neves - 2023',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthProvider>
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  </AuthProvider>
}
