import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavbarBrand() {
  return (
   <Link href="/" className='flex gap-2 items-center'>
    <div className='relative h-8 w-8 lg:h-10 lg:w-10'>
      <Image alt='logo' src="/logo.png" fill />
    </div>
    <h1 className='text-xl lg:text-3xl font-semibold'> Clarusway</h1>
   </Link>
  )
}
