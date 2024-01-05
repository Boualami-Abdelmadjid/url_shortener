import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Footer from '@/components/Footer/Footer'
import Nav from '@/components/auth/Nav'
import { Providers } from '../utils/redux/provider'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'URL Shortener',
  description: 'URL Shortener website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (  
    <Providers >
      <html lang="en">
        <body className={inter.className}>
        <header>
          <div className='z-5 relative'>
            <div className="rounded-full w-48 h-48 bg-violet-300 blur-xl shadow-violet-200 shadow-2xl absolute top-2 -left-8"></div>
            <div className="rounded-full w-16 h-16 bg-violet-300 blur-xl shadow-violet-200 shadow-2xl absolute top-4 right-0"></div>
          </div>
          <div className='relative flex justify-between items-center mx-48 py-4 z-10'>
            <div className='flex gap-8'>
              <Link href='/' className='text-lg text-gray-700 transition-colors hover:text-violet-400'> Home </Link>
              <Link href='/shortener' className='text-lg text-gray-700 transition-colors hover:text-violet-400'> Shortener </Link>
              <Link href='/history' className='text-lg text-gray-700 transition-colors hover:text-violet-400'> History </Link>
            </div>
            <Nav/>
          </div>
        <div>

        </div>
      </header>
      <ToastContainer />
      {children}
      <Footer />
      </body>
      </html>
    </Providers>
  )
}
