import React from 'react'
import PropTypes from 'prop-types'

function OutlinedButton(props: any) {
    return (
        <button className='outlined-btn'>
            {props.text}
        </button>
    )
}

OutlinedButton.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
}

export default OutlinedButton
