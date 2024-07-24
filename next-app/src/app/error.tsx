"use client"
import React from 'react'

export default function Error({error}:{error:Error}) {
    console.log(error.message)
  return (
    <div>
      <h1 className='text-red-500'>Sorry something went wrong </h1>
    </div>
  )
}
