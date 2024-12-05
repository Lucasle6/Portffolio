import React from 'react'
import logo from '../assets/LL_logo.png';
import {FaGithub, FaLinkedin} from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <a href="/" aria-label='Home'>
                <img src={logo} className='mx-2 invert' width={50} height={33} alt="Logo" />
            </a>
        </div>
        <div className='m-8 flex iems-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/luisleon6/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                <FaLinkedin/>
            </a>
            <a href="https://github.com/Lucasle6" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                <FaGithub/>
            </a>
        </div>
    </nav>
  )
}

export default Navbar