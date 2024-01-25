import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ConferenceCard(props:any) {
    return (
        <Link to={'/conference/'}>
            <div className='p-3 m-2 transition-shadow ease-linear delay-75 rounded-xl shadow-md hover:shadow-lg active:shadow-sm'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolore blanditiis veritatis amet consectetur dicta porro fuga adipisci et impedit, maiores aliquam animi ab ex at consequatur facere, cumque illum!
            </div>
        </Link>
    )
}

ConferenceCard.propTypes = {
    subject: PropTypes.string,
    logo: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    location: PropTypes.string
}

export default ConferenceCard
