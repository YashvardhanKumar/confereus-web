import React from 'react'
import PropTypes from 'prop-types'
import searchicon from '../assets/searchicon.svg'

function Search(props: any) {
    return (
        <div className='flex flex-row flex-auto items-center lg:max-w-md'>
            <input type='text' placeholder='Search Conferences' className='flex-1 placeholder:text-[#565656] text-opacity-60 bg-[#9a9a9a] bg-opacity-20 outline-none py-1 px-1' title='Enter' />
            <button className='placeholder:text-metal bg-[#9a9a9a] bg-opacity-35 outline-none py-1 px-4 hover:bg-opacity-40 active:bg-opacity-30'>
                <img src={searchicon} alt='search' className='h-6' />
            </button>
        </div>
    )
}

Search.propTypes = {}

export default Search
