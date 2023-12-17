"use client"
import React,{useRef} from 'react'
import Link from 'next/link'
import { useRegister } from '@/app/hooks/auth'

export default function Signup() {
    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const password2Ref = useRef<HTMLInputElement>(null)

    const SignUpHandler = (e: React.SyntheticEvent) => {
        e.preventDefault()
        const email = emailRef.current?.value
        const password = passwordRef.current?.value
        const password2 = password2Ref.current?.value

        if (email && password && password2) {
            if (password == password2) {
                const body = {
                    email,
                    password,
                    password2
                }
                useRegister(body)
            }else {
                console.log('passwords do not match')
            }
        }
    }
  return (
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-[53rem] lg:py-0">

      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form onSubmit={SignUpHandler} className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input ref={emailRef} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                  </div>
                  <div>
                      <label  htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input ref={passwordRef} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  <div>
                      <label htmlFor="password_2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input ref={password2Ref} type="password" name="password_2" id="password_2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                  </div>
                  

                  <button type="submit" className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary">Create an account</button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account <Link href="/login" className="font-medium text-primary hover:underline dark:text-primary">Sign in</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
  )
}
