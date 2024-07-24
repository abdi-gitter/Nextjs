"use client"
import React from 'react'


export default function Wrapping({children}:{children:React.ReactNode}) {
    console.log('Wrapping component Rendered')
  return (
    <div>
        <h1>Wrapping component</h1>
        <p>{process.env.NEXT_PUBLIC_PAGE_URL}</p>
        {children}
    </div>
  )
}
