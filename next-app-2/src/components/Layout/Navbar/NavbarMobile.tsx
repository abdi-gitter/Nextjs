import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import React from 'react'
import NavbarBrand from './NavbarBrand'
import { links } from '@/lib/constant'
import NavbarLink from './NavbarLink'

export default function NavbarMobile() {
  return (

    <Sheet>
        <SheetTrigger className='flex md:hidden'>
            <Button variant="outline">
                <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent className='flex flex-col h-full'>
            <SheetHeader>
                <SheetTitle>
                    <NavbarBrand/>
                </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-5 flex-1 mt-10">
                {links.map(link=>(
                    <NavbarLink key={link.title} title={link.title} path={link.path}/>
                ))}
            </div>
        </SheetContent>
    </Sheet>
  )
}
