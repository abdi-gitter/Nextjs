import type { Metadata } from "next";
import React from 'react';


export const metadata: Metadata = {
  title: {
    template:'Clarusway | %s',
    default:'Clarusway | Home'
}
}

interface ChildrenProps{
    children:React.ReactNode
}
export default function AuthLayout({children}:ChildrenProps) {
  return (
    <section className='w-full h-full flex flex-col container mx-auto mt-5'>
    
      <div className='flex-1'>{children}</div>

    </section>
  )
}
