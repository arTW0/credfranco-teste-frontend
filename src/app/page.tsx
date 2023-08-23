import Image from 'next/image'
import LoginForm from '@/components/login-form'

import googleLogo from './assets/google-icon.svg'
import felizLogo from './assets/logo-feliz.svg'

import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  function handleLogin() {
    console.log('oi')
  }

  return <div className="flex h-screen bg-red-200">
    <aside className="flex justify-center px-16 flex-col items-center bg-white-100">
      <Image src={felizLogo} alt="logo" />
    </aside>
    <main className='w-full h-full'>
      <div className="grid align-center justify-items-center">
        <h1 className="font-bold my-10 text-white-100">
          Acesse a sua conta
        </h1>
        <button className='flex items-center px-2 mb-3 rounded-md bg-white-100'>
          <Image src={googleLogo} alt="" className='m-2 bg-red-700 p-0.5 rounded-2xl' />
          Entre com sua conta Google
        </button>

        <div className='text-white-100'>
          ou entre com login da plataforma
        </div>

        <LoginForm />
      </div>
    </main>
  </div>
}
