"use client"
import React,{Suspense} from 'react'
import HistorySceleton from './HistorySceleton'
import CopyButton from '../Buttons/CopyButton'
import type { DomainsType } from '@/utils/types'

export default function History({domains}:{domains:DomainsType[]}) {
  return (
    <div className='w-full'>
    <h2 className='text-gray-600 font-medium text-xl'>Shortened urls:</h2>
    <div className='grid divide-y-2 divide-gray-400 rounded-lg bg-white mt-4'>
    {domains.length > 0 ? (domains.map(domain => (
        <div key={domain.short} className='grid grid-cols-2  divide-x-2 items-center'>
            <p className='py-2 grid grid-cols-history text-center justify-center gap-4'>
              <span>{domain.original}</span>
              <CopyButton domain={domain.original} />
            </p>
            <p className='py-2 grid grid-cols-history text-center justify-center gap-4'>
              <span>{domain.short}</span>
              <CopyButton domain={domain.short} />
            </p>
        </div>))) : <HistorySceleton />}
    {}
        
    </div>
</div>
  )
}


