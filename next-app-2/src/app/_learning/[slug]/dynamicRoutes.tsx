

// export async function generateStaticParams(){
//    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//    const posts = await res.json()
//    return posts.map(post=>({
//     slug: post.id.toString()
//    }))
// }

const getPost = async(id:string)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if(res.ok) return res.json()
}

export default async function page({params}:{params:{slug:string}}) {
    const post = await getPost(params.slug)
    return (
    <div>
      <h1 className="text-xl">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}
