import React from 'react'
import Link from 'next/link'

export default function LoggedInNav () {
  return (
        <Link href='/logout' className='text-xl text-white bg-primary px-4 py-2 rounded-md transition-all hover:-translate-y-1 hover:bg-violet-500 active:translate-y-0'> Logout </Link>
  )
}
