"use client"
import React, { FormEventHandler, useEffect, useState } from 'react'
import Shortener from '@/components/Forms/Shortener'


type DomainsType = {
    original:string,
    short:string
  }

  export  default function page() {
    const fetchDomains = (() => {
        // Fetch data from external API
        fetch('http://localhost:5000/api/getDomains/',{
            credentials:'include'
        }).then(res => res.json()).then(res => {
            if (res.status === 200) {
                return res.domains
            }
        }).then(domains => {
            if (domains) {
                setDomains(domains)
            }
        })
    }) 

    useEffect(()=>{fetchDomains()},[])
    const [domains,setDomains] = useState<DomainsType[]>([])
    console.log(domains)
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
        }).then(res => res.json()).then(res => {

            if (res.status === 200) {
                const {short,original} = res
                setDomains(prev => [{original,short},...prev].slice(0,10))
                const input = document.querySelector('input')
                if (input) {
                    input.value = ''
                }
            }
        })
      }
  return (
    <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto min-h-[52.1rem] lg:py-32">
        <main className="flex flex-col w-1/2 items-center gap-32  overflow-hidden">
            <Shortener cb={submitHandler}/>
            <div className='w-full'>
                <h2 className='text-gray-800 font-medium text-xl'>Shortened urls:</h2>
                <div className='grid divide-y-2 rounded-lg bg-white mt-4'>
                {domains.map(domain => (
                    <div key={domain.short} className='grid grid-cols-2  divide-x-2 items-center'>
                        <span className='py-2 text-center'>{domain.original}</span>
                        <span className='py-2 text-center'>{domain.short}</span>
                    </div>))}
                    
                </div>
            </div>
        </main>
    </div>
  )
}
