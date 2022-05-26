import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import LaunchApp from './LaunchApp'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='flex p-4 text-[#ffffff] mx-auto justify-between max-w-[1440px] items-center px-4 font-light'>

        <h1 className='w-full text-4xl' >
            LXBL
        </h1>

        <ul className='whitespace-nowrap text-xl hidden md:flex'>
            <li className='px-4 py-2.5'>Learn More</li>
            <li className='px-4 py-2.5'>Roadmap</li>
            <li className='px-4 py-2.5'>Contact</li>
            <li className='px-4'>
                <LaunchApp />
            </li>
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
        </div>

        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full md:hidden bg-background ease-in-out duration-500 z-10' : 'ease-in-out w-[60%] duration-500 fixed left-[-100%] md:hidden top-0 h-full z-10'}>
            <h1 className='p-4 w-full text-4xl' >
                LXBL
            </h1>
            <ul className='text-xl '>
                <li className='p-4 border-b'>
                    <LaunchApp />
                </li>
                <li className='p-4 border-b'>Learn More</li>
                <li className='p-4 border-b'>Roadmap</li>
                <li className='p-4 '>Contact</li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar