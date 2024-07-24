
interface Props{
    params?:{slug:string},
    searchParams?:{ [key:string]: string| string[]| undefined}
}

export default function ServerNavigation({params, searchParams}:Props) {

  console.log(params)
    console.log(searchParams?.sort)
  return (
    <div>
      <h1>Learning Page</h1>
    </div>
  )
}
