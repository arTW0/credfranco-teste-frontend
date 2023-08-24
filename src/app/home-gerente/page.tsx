import Image from 'next/image'
import felizLogo from '../assets/logo-feliz-2.svg'

export default function Home() {
  return <main className="h-screen w-screen bg-white-100">
    <header className='flex bg-red-700'>
      <Image className='m-2 w-32' src={felizLogo} alt="logo" />
    </header>
  </main>
}