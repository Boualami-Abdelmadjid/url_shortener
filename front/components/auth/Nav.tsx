"use client"
import React, {useEffect,useState,Suspense} from 'react'
import Link from 'next/link'
import { useSelector, useDispatch, authSlice } from '@/utils/redux/store'
import { useRouter } from 'next/navigation'
import { getCookie } from "cookies-next";

export default function Nav() {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.auth.loggedIn)
  if (!loggedIn) {
    const sessionId = getCookie('sessionId')
    if (sessionId) {
      dispatch(authSlice.actions.login({username:undefined}))
    }
  }
  useEffect(() => {
    setIsClient(true)
  }, [])



  function eraseCookie(name:string) {
    document.cookie = name + '=; Max-Age=0'
  }
  const logoutHandler = (e:React.SyntheticEvent) => {
    e.preventDefault()
    dispatch(authSlice.actions.logout())
    eraseCookie('sessionId')
    window.location.href = '/'
 }
        
    return (
            <>
            {isClient ? (
              loggedIn ? <button onClick={logoutHandler} className='text-lg text-white bg-primary px-4 py-2 rounded-md transition-all hover:-translate-y-1 hover:bg-violet-500 active:translate-y-0'> Logout </button> : 
              <div className='flex gap-8 items-center'>
              <Link href='/login' className='text-lg text-gray-700 transition-colors hover:text-violet-400'> Sign In </Link>
              <Link href='/signup' className='text-lg text-white bg-primary px-4 py-2 rounded-md transition-all hover:-translate-y-1 hover:bg-violet-500 active:translate-y-0'> Sign Up </Link>
            </div> )
            : <></>
            }
            </>
        )
}
