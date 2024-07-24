"use client"

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export default function NavigationPage() {
    const router = useRouter()
    const pathname = usePathname()
    const params = useSearchParams()
    const sort = params.getAll('sort')
    

    console.log(sort)
    // router.refresh()
    // router.back()
    // router.replacte('/')
    // router.push('/')
  return (
    <div>

        <Link href='/'>Go to Home</Link> <br />

        <button onClick={()=> router.push('/')}> Logout</button>
    </div>
  )
}
