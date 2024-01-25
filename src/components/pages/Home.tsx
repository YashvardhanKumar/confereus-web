import React from 'react'
import { Link } from 'react-router-dom'

import landingDetails from '../../utils/data.json'
import NavBar from '../NavBar'
import meetingImg from '../../assets/meeting3.jpeg'
import DetailsCard from '../card/DetailsCard'

export default function Home() {
    return (
        <div className='flex-1 flex flex-col w-full bg-black'>
            {/* <ul className='flex flex-col'>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <div className='bg-metal' style={{ height: "0.5px" }}></div>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
          <li className='p-2.5 text-nowrap bg-cusblue bg-opacity-50'>Attended Conferences</li>
        </ul> */}

            {/* <li className='grid grid-cols-4 h-fit p-4'>

        </li> */}
            <div className='absolute bottom-0 w-full'>
                <div className='relative backdrop-blur-lg w-full p-8 bg-gradient-to-t from-silver  text-cusblue bg-opacity-60 text-pretty'>
                    <div className='relative -bottom-1/2 md:text-7xl text-2xl font-bold width-full height-full bg-opacity-40 text-center md:first-letter:text-8xl first-letter:text-3xl'>
                        Confereus
                    </div>
                </div>
            </div>
            <img src={meetingImg} className='h-screen w-screen object-cover' />
            <div className='relative'>
                <div className='bg-silver p-14 px-24 md:text-7xl text-2xl'>
                    Are you tired of the complexities of conference management?
                </div>

                <div className='absolute h-16 w-16 bg-bubble-gum -bottom-0'></div>
                <div className='absolute h-8 w-1/2 bg-black -bottom-0'></div>
                <div className='absolute h-1/2 w-8 bg-metal -bottom-0'></div>
                <div className='absolute h-16 w-16 bg-bubble-gum right-0 top-0'></div>
                <div className='absolute h-8 w-1/2 bg-black right-0 top-0'></div>
                {/* <div className='absolute z-10 h-8 w-8 bg-black right-0 bottom-0'></div> */}
                <div className='absolute h-1/2 w-8 bg-metal right-0 top-0'></div>
            </div>
            <div className='bg-metal text-white p-11 md:px-24 md:text-4xl text-lg'>
                Look no further! Confereus is here to simplify and elevate your conference experience.
            </div>
            <div className='relative'>
                <div className='bg-silver md:p-24 p-16 md:text-4xl text-lg font-medium'>
                    Confereus aims to revolutionize conference organization and management, providing a feature-rich platform that elevates the experience for all stakeholders involved.
                </div>
                <div className='absolute h-16 w-16 bg-bubble-gum right-0 top-0'></div>
                <div className='absolute h-8 w-1/2 bg-black right-0 top-0'></div>
                {/* <div className='absolute z-10 h-8 w-8 bg-black right-0 bottom-0'></div> */}
                <div className='absolute h-1/2 w-8 bg-metal right-0 top-0'></div>
                <div className='absolute h-16 w-16 bg-bubble-gum left-0 bottom-0'></div>
                <div className='absolute h-8 w-1/2 bg-metal left-0 bottom-0'></div>
                {/* <div className='absolute z-10 h-8 w-8 bg-black right-0 bottom-0'></div> */}
                <div className='absolute h-1/2 w-8 bg-black left-0 bottom-0'></div>

            </div>
            <div className='flex flex-col w-full items-center flex-wrap p-4'>
                <center className='text-white text-3xl border-b-4 pb-3 mb-10 px-20 w-fit border-white'>Key Features</center>
                {landingDetails.map((value) => <DetailsCard title={value.title} description={value.description} id={value.id} />)}
            </div>
            <div className='bg-cusblue text-white p-11 sm:text-4xl text-xl font-extrabold flex justify-center gap-2'>
                <Link to={'/sign-up'} className='hover:text-silver active:opacity-40'>
                    Join the Revolution
                </Link>
                <div>
                    &#11208;
                </div>

                {/* <div className='absolute h-16 w-16 bg-bubble-gum -top-0'></div>
          <div className='absolute h-8 w-1/2 bg-black -top-0'></div>
          <div className='absolute h-1/2 w-8 bg-metal -top-0'></div> */}
            </div>
            
        </div>
    )
}
