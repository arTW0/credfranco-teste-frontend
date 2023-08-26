import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth/next'

import { options } from "../api/auth/[...nextauth]/options"

import felizLogo from '../assets/logos/logo-feliz-2.svg'

import { BiLogOut as LogoutIcon } from 'react-icons/bi'

import Footer from '@/components/footer'
import Customers from '../../components/customers'
import Products from '@/components/products'

export default async function Home() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('http://localhost:3000/api/auth/signin?callbackUrl=/home-page')
  }

  return <main className="h-screen w-screen bg-white-100">
    <header className='flex place-content-between items-center bg-red-700'>
      <Image className='m-2 w-32' src={felizLogo} alt="logo" />
      <h2 className='ml-24 text-white-100'>
        Boas vindas, <span className='font-bold'>{session.user?.name}</span>
      </h2>
      <Link href="/api/auth/signout" className='flex items-center rounded-lg h-10 w-24 my-4 mx-16 bg-white-100'>
        <LogoutIcon className='h-4/5 w-4/5 text-black-100' />
        <p className='text-black-100 m-2 font-bold'>
          Sair
        </p>
      </Link>
    </header>
    <div className='flex flex-col justify-center'>
      <Products />
      <Customers />
    </div>
    <Footer />
  </main>
}