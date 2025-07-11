import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coloring Pages Fans - Free Printable Coloring Pages',
  description: 'Discover thousands of free coloring pages for kids and adults. Download and print your favorite coloring templates and enjoy creative time.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 