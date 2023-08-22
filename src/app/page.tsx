import Image from 'next/image'
import LoginForm from '@/components/login-form'

import googleLogo from './assets/google-icon.svg'
import felizLogo from './assets/logo-feliz.svg'

import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  function handleLogin() {
    console.log('oi')
  }

  return <div className="flex items-stretch h-screen bg-red-700">
    <aside className="flex justify-center flex-col items-center px-60 py-16 bg-slate-200">
      <Image src={felizLogo} alt="logo" />
    </aside>
    <main className="items-stretch">
      <div>
        <h1>Acesse a sua conta</h1>
        <button>
          <Image src={googleLogo} alt="" />
          Entre com sua conta Google
        </button>

        <div>ou entre com login da plataforma</div>

        <LoginForm />
      </div>
    </main>
  </div>
}
