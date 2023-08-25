import Image from 'next/image'

import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from 'next-auth/next'

import felizLogo from '../assets/logo-feliz-2.svg'

import { AiOutlineUser as UserIcon } from 'react-icons/ai'
import Footer from '@/components/footer'
import { redirect } from 'next/navigation'

export default async function Home() {
  const session = await getServerSession(options)

  if (!session) {
    redirect('http://localhost:3000/api/auth/signin?callbackUrl=/home-page')
  }

  return <main className="h-screen w-screen bg-white-100">
    <header className='flex place-content-between items-center bg-red-700'>
      <Image className='m-2 w-32' src={felizLogo} alt="logo" />
      <h2 className='ml-24 text-white-100'>
        Boas vindas, <span className='font-bold'>{session ? session.user?.name : null}</span>
      </h2>
      <span className='flex items-center rounded-lg h-10 w-32 my-4 mx-16 bg-white-100'>
        <UserIcon className='h-4/5 w-4/5 text-black-100' />
        <p className='text-black-100 m-2 font-bold'>
          {session.user?.name}
        </p>
      </span>
    </header>

    <section className='flex flex-col items-center justify-center h-4/5'>
      <h1 className='text-4xl font-bold text-red-700'>
        Bem vindo ao sistema de gerenciamento de funcionários
      </h1>
      <p className='text-2xl text-red-700'>
        Aqui você pode cadastrar, editar e excluir funcionários
      </p>
    </section>

    <Footer />
  </main>
}