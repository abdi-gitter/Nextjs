import React from 'react'
import Wrapping from './Wrapping'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default function page() {
  return (
    <div>
      <Wrapping>
        <ComponentA/>
        <ComponentB/>
        </Wrapping>
    </div>
  )
}
