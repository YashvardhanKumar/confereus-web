import React from 'react'
import PropTypes from 'prop-types'
import { text } from 'stream/consumers'
import { Link } from 'react-router-dom'

function OutlinedButton(props: any) {
    return (
        <Link to={props.route} className='outlined-btn'>
            {props.text}
        </Link>
    )
}

OutlinedButton.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
}

export default OutlinedButton
