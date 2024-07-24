"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function Navbar() {

  const pathname = usePathname()
  const router = useRouter()

  const links = [
    {title:'Home', href:'/'},
    {title:'About', href:'/about'},
    {title:'Contact', href:'/contact'},
  ]


  const loginHandler = ()=>{
    console.log('Clicked!')
    router.push('/login')
    // router.replace('/login')
    // router.refresh()
  }

  return (
    <div className='p-3 bg-background text-foreground border-b-2'>
      <div className="container flex  items-center justify-between">
        <div className='flex items-center gap-5'>
           <img src="/logo.png" alt="" className='w-10 '/>
           <h1 className='font-semibold text-3xl'>Clarusway</h1>
        </div>      

        <div className="flex gap-5">

         {links.map((link=>(
          <Button asChild variant={pathname===link.href ? "default" : "link"}>
              <Link href={link.href}> {link.title}</Link>
          </Button>
         )))}

         <Button variant="secondary"  onClick={loginHandler}> 

          Login
         </Button>
        </div>
      
      </div>

    </div>
  )
}
