"use client"
import React,{useState, useEffect, Suspense} from 'react'
import History from '@/components/History/History'
import type { DomainsType } from '@/utils/types'

export default function page() {
    const [domains,setDomains] = useState<DomainsType[] >([])
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
  return (
    <div className="flex flex-col items-center justify-between px-6 py-8 mx-auto min-h-[52.1rem] lg:py-32">
        <main className="flex flex-col w-1/2 items-center gap-32  overflow-hidden">
            <History domains={domains} />
        </main>
    </div>
  )
}
