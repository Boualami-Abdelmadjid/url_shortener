"use client"
import React from 'react'
import Link from 'next/link'
import { useSelector, useDispatch, authSlice } from '@/app/utils/redux/store'

export default function Nav() {
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.auth.loggedIn)

  function eraseCookie(name:string) {
    document.cookie = name + '=; Max-Age=0'
  }
  const logoutHandler = (e:React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(authSlice.actions.logout())
    eraseCookie('sessionId')
 }
  if (loggedIn) {
      return <button onClick={logoutHandler} className='text-lg text-white bg-primary px-4 py-2 rounded-md transition-all hover:-translate-y-1 hover:bg-violet-500 active:translate-y-0'> Logout </button> 
  } else {
    return (<div className='flex gap-8 items-center'>
          <Link href='/login' className='text-lg text-gray-700 transition-colors hover:text-violet-400'> Sign In </Link>
          <Link href='/signup' className='text-lg text-white bg-primary px-4 py-2 rounded-md transition-all hover:-translate-y-1 hover:bg-violet-500 active:translate-y-0'> Sign Up </Link>
        </div>
        )
  }

}
