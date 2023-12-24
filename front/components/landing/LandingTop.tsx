import React, { FormEventHandler } from 'react'
import Shortener from '../Forms/Shortener';



export default function LandingTop() {
  const submitHandler : FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    // @ts-ignore
    const domain = e.currentTarget.elements.link.value
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/shorten/`,{
      method:'POST',
      body:JSON.stringify({domain}),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
    if (res.status === 200) {
      const input = document.querySelector('input')
      if (input) {
        input.value = ''
      }
    }
  }
  return (
    <div className='mt-24 w-3/5 text-center grid gap-4'>
        <h1 className='text-primary text-4xl text-bold text-center mb-2'>Create Short Links!</h1>
        <p className='text-gray-600 mb-12 max-w-xl mx-auto'>Tired of clunky, messy links? Shorten them with us! Share easily, track clicks, and keep things sleek.</p>
        <div className='rounded-lg bg-gray-50 w-full py-8 px-4 drop-shadow-[0_35px_35px_rgba(192,158,209,0.25)]'>
          <Shortener cb={submitHandler}/>
        </div>
        <p className='text-gray-400'>Use it, It's Fast - Free - Secure - Long Term Link!</p>
    </div>
  )
}
