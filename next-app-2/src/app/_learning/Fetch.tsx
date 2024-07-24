"use client"
import Link from "next/link"
import { useState } from "react"


const getData = async()=>{
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts', {cache:'no-store'})
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{revalidate:3600}})
    if(res.ok) return res.json()
}

export default function DataFetch() {
  const [posts, setPosts] = useState([])

  const loadData = async()=>{
    let res = await getData()
    setPosts(res)
    }

  return (

    <div>
    
    <button onClick={loadData}> Fetch Data</button>
      {posts?.map(post=> (<Link key={post.id} href={`/learning/${post.id}`} className="block"> {post.title}</Link>))}
    </div>

  )
}
