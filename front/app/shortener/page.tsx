import React from 'react'
import Shortener from '@/components/Forms/Shortener'

export default function page() {
  return (
    <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto min-h-[52.1rem] lg:py-32">
        <main className="flex flex-col w-1/2 items-center gap-32  overflow-hidden">
            <Shortener/>
            <div className='w-full'>
                <h2 className='text-gray-800 font-medium text-xl'>Shortened urls:</h2>
                <div className='grid divide-y-2 rounded-lg bg-white mt-4'>
                    <div className='grid grid-cols-2  divide-x-2 items-center'>
                        <span className='py-2 text-center'>Original</span>
                        <span className='py-2 text-center'>Shortened</span>
                    </div>
                    <div className='grid grid-cols-2  divide-x-2 items-center'>
                        <span className='py-2 text-center'>Original</span>
                        <span className='py-2 text-center'>Shortened</span>
                    </div>
                    <div className='grid grid-cols-2  divide-x-2 items-center'>
                        <span className='py-2 text-center'>Original</span>
                        <span className='py-2 text-center'>Shortened</span>
                    </div>
                    <div className='grid grid-cols-2  divide-x-2 items-center'>
                        <span className='py-2 text-center'>Original</span>
                        <span className='py-2 text-center'>Shortened</span>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
