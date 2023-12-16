import React from 'react'
import LinkIcon from '@mui/icons-material/Link';

export default function LandingTop() {
  return (
    <div className='my-24 w-3/5 text-center grid gap-4'>
        <h1 className='text-primary text-4xl text-bold text-center mb-4'>Create Short Links!</h1>
        <p className='text-gray-600 mb-12'>Tired of clunky, messy links? Shorten them with us! Share easily, track clicks, and keep things sleek.</p>
        <div className='rounded-lg bg-gray-50 w-full py-8 px-4 drop-shadow-sm'>
            <form className='rounded-md bg-gray-100 py-4 px-8 flex gap-4 items-center'>
                <LinkIcon htmlColor='gray'/>
                <input placeholder='Paste a link to shorten it' name="link" className='bg-transparent text-gray-600 grow focus:outline-0 focus:border-0'/>
                <button className='px-6 py-4 rounded-md bg-primary text-white transition-colors hover:bg-violet-500'>Shorten</button>
            </form>
        </div>
    </div>
  )
}
