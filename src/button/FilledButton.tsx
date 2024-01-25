import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function FilledButton(props: any) {
    return (
        <button className='filled-btn' type='submit'>
            {props.text}
        </button>
    )
}

FilledButton.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
}

export default FilledButton
