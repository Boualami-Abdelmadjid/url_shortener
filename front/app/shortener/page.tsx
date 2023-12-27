"use client"
import React, { FormEventHandler, useEffect, useState } from 'react'

import Shortener from '@/components/Forms/Shortener'
import History from '@/components/History/History'
import type { DomainsType } from '@/utils/types'

  export  default function page() {
      const [domains,setDomains] = useState<DomainsType[]>([])
      const [domain,setDomain] = useState<string|undefined>(undefined)
      
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
                    setDomain(short)
                    setDomains(prev => [{original,short},...prev].slice(0,10))
                    const input = document.querySelector('input')
                    if (input) {
                        input.value = ''
                    }
                }
            })
        }
        useEffect(()=>{fetchDomains()},[])
  return (
    <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto min-h-[52.1rem] lg:py-32">
        <main className="flex flex-col w-1/2 items-center gap-32  overflow-hidden">
            <Shortener cb={submitHandler} domain={domain}/>
            <History domains={domains} />
        </main>
    </div>
  )
}
