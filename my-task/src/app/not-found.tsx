import Link from 'next/link'

const NotFound = () => {
  return (
    <main className={'pt-20 wrapper flex flex-col items-center gap-6 '}>
      <h1 className={'text-5xl'}>
        Oops...
        Something went wrong.
      </h1>
      <Link className={'text-3xl hover:text-[#2f8393] transition '} href={'/'}>Go home</Link>
    </main>
  )
}

export default NotFound