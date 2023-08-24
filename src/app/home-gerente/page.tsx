import Image from 'next/image'
import Link from 'next/link'

import felizLogo from '../assets/logo-feliz-2.svg'

import { AiOutlineUser as UserIcon } from 'react-icons/ai'
import { FiGithub as GithubIcon } from 'react-icons/fi'
import { AiOutlineLinkedin as LinkedinIcon } from 'react-icons/ai'
import { AiOutlineInstagram as InstagramIcon } from 'react-icons/ai'

export default function Home() {



  return <main className="h-screen w-screen bg-white-100">
    <header className='flex place-content-between items-center bg-red-700'>
      <Image className='m-2 w-32' src={felizLogo} alt="logo" />
      <h2 className='ml-24 text-white-100'>
        Boas vindas, <span className='font-bold'>Gerente</span>
      </h2>
      <span className='flex items-center rounded-lg h-10 w-32 my-4 mx-16 bg-white-100'>
        <UserIcon className='h-4/5 w-4/5 text-black-100' />
        <p className='text-black-100 m-2 font-bold'>
          Gerente
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

    <footer className='flex items-center mt-5 place-content-evenly text-xs'>
      Desenvolvido por Arthur Neves - 2023
      <div className='flex items-center'>
        <Link href={'https://github.com/arTW0'} target="_blank">
          <GithubIcon className='w-5 h-5 mx-1' />
        </Link>
        <Link href={'https://www.linkedin.com/in/arthur-neves-a321b716b/s'} target="_blank">
          <LinkedinIcon className='w-6 h-6 mx-1' />
        </Link>
        <Link href={'https://www.instagram.com/arthnves/'} target="_blank">
          <InstagramIcon className='w-6 h-6 mx-1' />
        </Link>
      </div>
    </footer>
  </main>
}