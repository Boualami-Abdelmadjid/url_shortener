import React, { FormEventHandler } from 'react'
import LinkIcon from '@mui/icons-material/Link';


export default function Shortener({cb}:{cb:FormEventHandler} ) {
  return (
    <form onSubmit={cb} className='rounded-md bg-gray-100 w-full px-8 flex gap-4 items-center'>
        <LinkIcon htmlColor='gray'/>
        <input placeholder='Paste a link to shorten it' name="link" className='bg-transparent text-gray-600 grow py-8 focus:outline-0 focus:border-0'/>
        <button className='px-6 py-4 rounded-md bg-primary text-white transition-colors hover:bg-violet-500'>Shorten</button>
    </form>
  )
}
