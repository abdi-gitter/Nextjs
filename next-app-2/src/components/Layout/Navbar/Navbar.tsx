import React from 'react'
import NavbarBrand from './NavbarBrand'
import NavbarLinks from './NavbarLinks'

export default function Navbar() {
  return (
    <nav className='flex container mx-auto py-4 justify-between border-b px-2 md:px-8'>
      <NavbarBrand/>
      <NavbarLinks/>
    </nav>
  )
}
