"use client";
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { usePathname } from "next/navigation";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        {pathname !== "/login" ?
        pathname !== "/register" &&
        pathname !== "/potrait" &&
        pathname !== "/step" && (
          <Navbar/>
        ) : (
          <></>
        )}
        
        {children}
        {pathname !== "/login" ? 
         pathname !== "/register" &&
         pathname !== "/potrait" && (
          <Footer/>
        ) : (
          <></>
        )}
        
        </body>
    </html>
  )
}
