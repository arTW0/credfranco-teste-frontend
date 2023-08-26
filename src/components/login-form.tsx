'use client'

import Link from 'next/link';

export default function LoginForm() {
  return (
    <Link className='items-center mt-2 mb-64 px-2 rounded-md bg-black-800 text-white-100 font-bold h-10 w-24 hover:bg-black-100'
      type="submit" href={'http://localhost:3001/api/auth/signin?callbackUrl=/home-page'}    >
      Home page
    </Link>
  )
}