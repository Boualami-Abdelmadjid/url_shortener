import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-primary flex gap-8 px-24 py-4 transition-colors text-gray-100 hover:text-white'>
      <Link href="#">FAQ</Link>
      <Link href="#">Blog</Link>
      <Link href="#">About us</Link>
      <Link href="#">Contact us</Link>
    </div>
  )
}
