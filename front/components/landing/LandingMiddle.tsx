import React from 'react'
import LinkIcon from '@mui/icons-material/Link';
import TimelineIcon from '@mui/icons-material/Timeline';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

export default function LandingMiddle() {
  return (
    <div className='mt-24 w-3/5 text-center grid gap-4'>
        <h2 className='text-primary text-4xl text-bold text-center mb-2'>A short link,infinite possibilities</h2>
        <p className='text-gray-600 mb-12 max-w-xl mx-auto'>With the advanced intelligent link shortening service, you can customize your links and share them easily  </p>
        <div className='flex gap-4'>
            <div className='grid gap-2 text-blue-700 p-4 justify-items-center rounded-md drop-shadow-sm transition-all bg-transparent hover:bg-white hover:translate-y-1 '>
                <LinkIcon htmlColor='#5e5ed1' fontSize='large'/>
                <h3 className="font-medium">Custom domains</h3>
                <p className='text-gray-400 text-sm'>Track audience individually for each brand, website or client by using your own domain or subdomain for link shortening.</p>
                <p className='text-gray-300'>01</p>
            </div>
            <div className='grid gap-2 text-blue-700 p-4 justify-items-center rounded-md drop-shadow-sm transition-all bg-transparent hover:bg-white hover:translate-y-1'>
                <TimelineIcon htmlColor='#5e5ed1' fontSize='large'/>
                <h3 className="font-medium">Track clicks</h3>
                <p className='text-gray-400 text-sm'>Focus your or your client's efforts on the most promising campaigns by taking actions based on comprehensive statistics</p>
                <p className='text-gray-300'>02</p>
            </div>
            <div className='grid gap-2 text-blue-700 p-4 justify-items-center rounded-md drop-shadow-sm transition-all bg-transparent hover:bg-white hover:translate-y-1 '>
                <HeadsetMicIcon htmlColor='#5e5ed1' fontSize='large'/>
                <h3 className="font-medium">Friendly support</h3>
                <p className='text-gray-400 text-sm'>We really care about your success is using short links, so you always get answers</p>
                <p className='text-gray-300'>03</p>
            </div>

        </div>
    </div>
  )
}
