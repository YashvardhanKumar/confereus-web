import React from 'react'
import PropTypes from 'prop-types'

function DetailsCard(props: any) {

    return (
        <div className={`${props.id % 2 == 0 ? "self-end" : "self-start"} grid grid-rows-3 grid-flow-col gap-4 text-wrap p-5 items-center`}>
            <div className='lg:text-9xl text-6xl min-w-20 lhmax-w-32 text-center row-span-3 font-extrabold text-white'>
                {props.id}|
            </div>
            <div className={`text-white lg:text-4xl text-2xl col-span-2 font-bold border-b-2 pb-3`}>
                {props.title}
            </div>
            <div className={`text-white ${props.id % 2 == 0 ? "bg-cusblue" : "bg-metal"} p-4 col-span-2 row-span-2 self-center lg:max-w-2xl max-w-md`}>
                {props.description}
            </div>
            {/* <div className='flex-1'></div> */}
        </div>
    )
}

DetailsCard.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
}

export default DetailsCard
