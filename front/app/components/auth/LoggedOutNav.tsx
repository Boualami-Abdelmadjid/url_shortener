import React from 'react'
import Link from 'next/link'

export default function LoggedOutNav() {
  return (
    <div className='flex gap-8 items-center'>
        <Link href='/login' className='text-xl text-gray-700 transition-colors hover:text-violet-400'> Sign In </Link>
        <Link href='/signup' className='text-xl text-white bg-primary px-4 py-2 rounded-md transition-all hover:-translate-y-1 hover:bg-violet-500 active:translate-y-0'> Sign Up </Link>
  </div>
  )
}
