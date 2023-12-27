import React, { FormEventHandler, useState } from 'react'
import LinkIcon from '@mui/icons-material/Link';
import CopyButton from '../Buttons/CopyButton';


export default function Shortener({cb,domain}:{cb:FormEventHandler,domain:string | undefined} ) {
  return (
    <form onSubmit={cb} className='relative rounded-md bg-gray-100 w-full px-8 flex gap-4 items-center z-20'>
        <LinkIcon htmlColor='gray'/>
        <input placeholder='Paste a link to shorten it' name="link" className='bg-transparent text-gray-600 grow py-8 focus:outline-0 focus:border-0'/>
        <button className='px-6 py-4 rounded-md bg-primary text-white transition-colors hover:bg-violet-500'>Shorten</button>
        {domain ?
        <div className='bg-gray-100 text-primary h-10 absolute -bottom-8 left-0 px-4 pt-2 flex items-center gap-4 rounded-e-lg z-10 animate-drop'>
          <span className='font-medium'>{domain}</span>
          <CopyButton domain={domain} />
          </div>
      :<></>}
    </form>

  )
}
