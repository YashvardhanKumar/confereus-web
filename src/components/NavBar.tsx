import React, { useState } from 'react'
import logo from '../logo.svg'
import FilledButton from './link buttons/FilledButton'
import OutlinedButton from './link buttons/OutlinedButton'
import { Link } from 'react-router-dom'
import Search from './Search'
import menuicon from '../assets/menuicon.svg'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='p-3 flex lg:flex-row sm:flex-col fixed top-0 backdrop-blur-2xl justify-between w-full z-50 gap-2 bg-opacity-70 bg-white border-b-[1px] border-[#d0d0d0] lg:max-h-[72px]'>
      {/* <div className='flex flex-row items-center justify-between w-full'> */}
      <div className='flex sm:flex-row flex-1 flex-col gap-2 sm:gap-0'>
        <div className='max-sm:flex max-sm:flex-row justify-between items-center'>

          <Link to={"/"}>
            <div className='flex flex-row items-center transition-opacity opacity-100 ease-linear active:opacity-70 active:duration-75'>
              <img src={logo} alt='logo' className='h-11' />
              <div className='px-3 text-xl font-semibold text-cusblue'>
                Confereus
              </div>
            </div>

          </Link>
          <div className='flex gap-2'>

            <div className='sm:hidden'>
              {/* <OutlinedButton text="Sign Up" route='/sign-up' /> */}
              <FilledButton text="Login" route='/login' />
            </div>
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-black focus:outline-none">
                <img src={menuicon} alt='logo' className='transition h-7 opacity-100 ease-linear active:opacity-50 active:duration-75' />
              </button>
            </div>
          </div>

          {/* <div className='sm:hidden'>
            <FilledButton text="Sign Up" route='/sign-up' />
          </div> */}
        </div>

        <Search />


        {isOpen && (
          <ul className='sm:hidden mt-4'>
            <li className='p-3 transition-opacity opacity-100 ease-linear hover:opacity-50 hover:duration-75 active:opacity-20 active:duration-75'>
              <Link to={"/contact"} className=' font-semibold'>Contact Us</Link>
            </li>
            <li className='p-3 transition-opacity opacity-100 ease-linear hover:opacity-50 hover:duration-75 active:opacity-20 active:duration-75' >
              <Link to={"/support"} className='font-semibold'>Support</Link>
            </li>
          </ul>
        )}
      </div>
      <div className='sm:flex hidden flex-row justify-between'>

        <ul className='justify-self-start flex items-center flex-row self-end'>
          <li className='p-3 transition-opacity opacity-100 ease-linear hover:opacity-50 hover:duration-75 active:opacity-20 active:duration-75'>
            <Link to={"/contact"} className=' font-semibold'>Contact Us</Link>
          </li>
          <li className='p-3 transition-opacity opacity-100 ease-linear hover:opacity-50 hover:duration-75 active:opacity-20 active:duration-75' >
            <Link to={"/support"} className='font-semibold'>Support</Link>
          </li>
        </ul>
        <div className='flex flex-row items-center self-end'>
          {/* <OutlinedButton text="Sign Up" route='/sign-up' /> */}
          <FilledButton text="Login" route='/login' />
        </div>

      </div>


    </header>
  )
}
