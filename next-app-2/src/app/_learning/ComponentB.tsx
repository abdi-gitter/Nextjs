
import React from 'react'

export default function ComponentB() {
    console.log('Component B rendered....')
  return (
    <div>
        <h1>{process.env.TOKEN}</h1>
    </div>
  )
}
