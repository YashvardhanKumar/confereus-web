import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function FilledButton(props: any) {
    return (

                <Link to={props.route} className='filled-btn'>
                {props.text}
            </Link>
    )
}

FilledButton.propTypes = {
    text: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired
}

export default FilledButton
