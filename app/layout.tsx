import './globals.css'
import type { ReactNode } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '../components/CartProvider'

export const metadata = {
  title: 'Antiquebooks',
  description: 'Antique and rare books - Catalog and shop'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main className="min-h-[70vh] container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
