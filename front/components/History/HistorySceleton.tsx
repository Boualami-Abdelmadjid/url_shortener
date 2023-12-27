import React from 'react'

export default function HistorySceleton() {
  const placeholder = Array.from({length: 10}, (_, i) => i + 1)
  return (
    <>
    {placeholder.map((domain) => (
        <div key={domain} className='grid grid-cols-2 animate-pulse divide-x-2 divide-gray-200 items-center'>
            <p className='grid grid-cols-history text-center h-10 bg-gray-100 justify-center gap-4'></p>
            <p className='grid grid-cols-history text-center h-10 bg-gray-100 justify-center gap-4'></p>
        </div>))}
    </>
  )
}

