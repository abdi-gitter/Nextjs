"use client"
import { useState } from "react"


export default function FetchButton({children}) {
    const [show, setShow] = useState(false)
  return (
    <div>
      
      <button onClick={()=> setShow(true)}> Fetch Data</button>

      <div>
        {show&&children}
      </div>
    </div>
  )
}
