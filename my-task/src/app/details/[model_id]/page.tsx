'use client'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  return (
    <div className={'mt-20'}>
      <button
        className={'bg-[#cfdaec] px-4 py-1.5'}
        onClick={()=>router.back()}>Back</button>
      <h1 className={'text-3xl mt-4'}>
        Sorry, I don't have enough info for this car!
      </h1>
    </div>
  )
}

export default Page