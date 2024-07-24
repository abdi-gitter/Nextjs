"use client"

import { useEffect, useState } from "react"

export default function page() {

    const [mounted, setMounded] = useState(false)
    useEffect(()=>{
        setMounded(true)
    }, [])

    const randomNumber = Math.random()
    return (
    <div >
        {/* <h1 suppressHydrationWarning>{randomNumber}</h1> */}
        <h1>{mounted&&randomNumber}</h1>
    </div>
  )
}
