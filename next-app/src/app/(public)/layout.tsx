import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react';
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: {
    template:'Clarusway | %s',
    default:'Clarusway | Home'
}
}

interface ChildrenProps{
    children:React.ReactNode
}
export default function Publiclayout({children}:ChildrenProps) {
  return (
    <section className='w-full h-full flex flex-col'>
        <Navbar/>
      <div className='flex-1'>{children}</div>
      <Footer/>
    </section>
  )
}
