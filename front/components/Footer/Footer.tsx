import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className='bg-primary flex gap-8 px-24 py-4 transition-colors  hover:text-white'>
      <Link className="text-gray-100 hover:text-white" href="#">FAQ</Link>
      <Link className="text-gray-100 hover:text-white" href="#">Blog</Link>
      <Link className="text-gray-100 hover:text-white" href="#">About us</Link>
      <Link className="text-gray-100 hover:text-white" href="#">Contact us</Link>
    </div>
  )
}
