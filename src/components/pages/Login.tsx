import React from 'react'
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export default function Login() {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        delay: 200,
    });

    return (
        <div>
            <div className='lg:pt-[72px] pt-[109px]'></div>
            <animated.div style={fadeIn} className="flex items-center justify-center max-h-full md:m-10 my-10">
                <form className="flex flex-col bg-white rounded-lg p-8 shadow-md md:w-96 w-3/4">
                    <h2 className="text-2xl font-semibold mb-6">Login</h2>
                    <label>Email</label>
                    <input type="email" className="w-full border p-2 rounded mb-4" />
                    <label>Password</label>
                    <input type="password" className="w-full border p-2 rounded mb-4" />
                    <span className='mb-4 font-medium md:text-base text-sm'>Don't have account?
                        <Link to={'/sign-up'} className='text-[#4477ce] font-bold px-1 md:text-base text-sm'>
                            Sign Up
                        </Link>
                    </span>
                    <button className="bg-[#4477ce] text-white rounded-xl p-3 px-10">Login</button>
                </form>
            </animated.div>
        </div>

    );
}
