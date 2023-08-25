import Image from 'next/image'

import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

import googleLogo from './assets/google-icon.svg'
import felizLogo from './assets/logo-feliz.svg'

import 'bootstrap/dist/css/bootstrap.css'
import Footer from '@/components/footer'
import LoginForm from '@/components/login-form'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(options)

  return <div className="flex h-screen bg-red-200">
    <aside className="flex justify-center px-16 flex-col items-center bg-white-100">
      <Image src={felizLogo} alt="logo" />
    </aside>
    <main className='w-full h-full'>
      <div className="grid align-center justify-items-center">
        <h1 className="font-bold my-24 text-white-100">
          Acesse a sua conta
        </h1>

        <button className='flex items-center px-2 mb-3 rounded-md bg-white-100'>
          <Image src={googleLogo} alt="" className='m-2 bg-red-700 p-0.5 rounded-2xl' />
          Entre com sua conta Google
        </button>

        <div className='text-white-100'>
          ou entre com login da plataforma
        </div>

        {!session ?
          <>
            <Link href={'http://localhost:3000/home-page'}>
              Home Page
            </Link>
          </>
          :
          <LoginForm />
        }
      </div>
      <Footer />
    </main>
  </div>
}
