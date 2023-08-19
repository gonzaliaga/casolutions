'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from "./providers";
/* import NavbarApp from '@/components/navbar/Navbar';
import Footer from "@/components/footer/Footer" */

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '7dev',
  description: 'Desarrollo de aplicaciones web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className='dark'>
      <body>
        <Providers>
          {/* <NavbarApp /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>

  )
}
