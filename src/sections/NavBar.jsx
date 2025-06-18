import React, { useState } from 'react'
import { motion } from 'motion/react';
import menuIcon from '../assets/menu.svg';
import crossIcon from '../assets/close.svg'


function Navigation(){
    return (
        <ul className='nav-ul  '>
            <li className='nav-li'>
                <a href="#home" className='nav-link '>Home</a>
            </li>
            <li className='nav-li'>
                <a href="#about" className='nav-link'>About</a>
            </li>
            <li className='nav-li'>
                <a href="#projects" className='nav-link'>Projects</a>
            </li>
            <li className='nav-li'>
                <a href="#contact" className='nav-link'>Contact</a>
            </li>
        </ul>
    )
}

const NavBar = () => {

    const [isOpen, setisOpen] = useState(false)
  return (
    <div className='fixed inset-x-0 z-60  w-full bg-primary/10 backdrop-blur-lg'>
        <div className='mx-auto c-space max-w-7xl'>
            <div className='flex items-center justify-between py-2 sm:py-0'>
                 <a href='/' className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>Jefrin</a>
                 <button onClick={()=>setisOpen(!isOpen)} className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden'> 
                    <img src={isOpen ? crossIcon :menuIcon} alt="toggle" className='h-6 w-6'/>
                 </button>
                 <nav className='hidden sm:flex '>
                    <Navigation/>
                 </nav>
            </div>
        </div>
          
          {isOpen && (  <motion.div
               initial={{opacity:0, x:-10}}
               animate = {{opacity:1, x:0}}
               style={{maxHeight:"100vh"}}
               transition={{duration:1}}
               className='block overflow-hidden text-center sm:hidden '>
               <nav className='pb-5'>
                     <Navigation/>
               </nav>
          </motion.div>)}

    </div>
  )
}

export default NavBar