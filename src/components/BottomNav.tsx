import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomNav() {
    return (
        <footer className='bg-metal text-white'>
            <div className='flex sm:flex-row flex-col justify-around'>

                <div className='flex flex-col max-[325px]:p-1 p-5'>
                    <div className='font-bold sm:text-lg text-base'>
                        Contact Us:
                    </div>
                    <div className='sm:text-base text-sm'>
                        Email: confereus@gmail.com
                    </div>
                    <div className='sm:text-base text-sm'>
                        Phone: (91) 7021051913
                    </div>
                </div>

                <div className='flex flex-col max-[325px]:p-1 p-5'>
                    <div className='font-bold sm:text-lg text-base'>
                        Ouick Links:
                    </div>
                    <Link to={'/about'} className='sm:text-base text-sm'>
                        About Us
                    </Link>
                    <Link to={"/support"} className='sm:hidden sm:text-base text-sm'>Support</Link>
                    <Link to={"/contact"} className='sm:hidden sm:text-base text-sm'>Contact Us</Link>

                </div>
            </div>

            <div className='flex sm:flex-row flex-col justify-around max-[325px]:p-1 p-5 w-full sm:text-base text-sm'>
                <div className='font-bold'>© 2024 Confereus. All rights reserved.</div>
                <div className='flex gap-1'>
                    <Link className='sm:text-base text-sm' to={'/privacy'}>Privacy Policy</Link>
                    |
                    <Link className='sm:text-base text-sm' to={'/terms'}>Terms of Service</Link>
                </div>
            </div>
        </footer>

    )
}
