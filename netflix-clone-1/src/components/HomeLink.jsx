"use client"

import { useAuth } from "@/context/AuthContext"
import Link from "next/link"

export default function HomeLink() {
    const {currentUser} = useAuth()
  
  return (
    <Link href={currentUser? '/profile':'/login'} className="btn-danger max-w-[250px] text-center">Get Started</Link>
  )
}
