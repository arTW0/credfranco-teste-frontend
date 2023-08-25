import Link from "next/link";

import { FiGithub as GithubIcon } from 'react-icons/fi'
import { AiOutlineLinkedin as LinkedinIcon } from 'react-icons/ai'
import { AiOutlineInstagram as InstagramIcon } from 'react-icons/ai'

export default function Footer() {
  return <footer className='flex items-center align-bottom place-content-evenly text-xs'>
    Desenvolvido por Arthur Neves - 2023
    <div className='flex items-center'>
      <Link href={'https://github.com/arTW0'} target="_blank">
        <GithubIcon className='w-5 h-5 mx-1 text-black-100' />
      </Link>
      <Link href={'https://www.linkedin.com/in/arthur-neves-a321b716b/s'} target="_blank">
        <LinkedinIcon className='w-6 h-6 mx-1 text-black-100' />
      </Link>
      <Link href={'https://www.instagram.com/arthnves/'} target="_blank">
        <InstagramIcon className='w-6 h-6 mx-1 text-black-100' />
      </Link>
    </div>
  </footer>
}