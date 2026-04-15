import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

const outfit = Outfit({ subsets: ['latin'], weight: ['300','400','500','600','700','800','900'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://fluentcallers.com'),
  title: { default: 'Fluent Callers | Hire a Pre-Vetted Cold Calling VA in 48 Hours', template: '%s | Fluent Callers' },
  description: 'We match US businesses with pre-vetted cold calling and appointment setting VAs. Watch them before you hire. Free replacement guarantee. No long-term contracts.',
  openGraph: {
    siteName: 'Fluent Callers',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Nav />
        <ScrollReveal />
        {children}
        <Footer />
      </body>
    </html>
  )
}
