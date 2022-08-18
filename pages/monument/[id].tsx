import { useRouter } from 'next/router'

export default function MonumentDetail() {

const router = useRouter()

  return (
    <>
    <div>Monument id</div>
    <h2>{router.query.id}</h2>
    <button onClick={() => router.push('/monument')}>BACK</button>
    {/* router.push directs to another page */}
    </>
  )
}
