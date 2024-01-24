import type { Metadata } from 'next'
import { Instrument_Serif, Urbanist } from 'next/font/google'
import './globals.css'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'


// const font = Instrument_Serif({ subsets: ['latin'] })


const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'That Girl',
  description: 'An online catelogue for the latest trends for products and how to be That Girl.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
