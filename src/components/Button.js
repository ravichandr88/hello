import PropTypes from 'prop-types'
import React from 'react'

function Button(props) {
    const onClick = (e) => {
        console.log('Clicked')
    }

    return (
       <button className='btn' onClick={onClick}>{props.title}</button>
    )
}

Button.defaultProps={
    title:'Button'
}

Button.propTypes={
    title : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button
