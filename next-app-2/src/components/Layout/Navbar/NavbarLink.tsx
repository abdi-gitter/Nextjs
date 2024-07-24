"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface linkProps{
  path:string;
  title:string;
}

export default function NavbarLink({path, title}:linkProps) {
  const pathname = usePathname()
  return (
    <Button variant={pathname===path? "default":"outline"} asChild>
      <Link href={path} >{title}</Link>
    </Button>
  )
}
