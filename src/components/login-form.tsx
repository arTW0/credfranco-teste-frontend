'use client'

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function LoginForm() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated: () => {
      redirect('http://localhost:3000/api/auth/signin?callbackUrl=/home-page')
    }
  })

  return (
    <button className='items-center mt-2 mb-64 px-2 rounded-md bg-black-800 text-white-100 font-bold h-10 w-24 hover:bg-black-100'
      type="submit"
    >
      {session ? 'Entrar' : 'Home Page'}
    </button>
  )
}