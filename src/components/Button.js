import PropTypes from 'prop-types'
import React from 'react'

function Button({title, onClick, color}) {
    

    return (
        <button className='btn' onClick={onClick} style={{ backgroundColor: color }}>{title} </button>
     )
}

Button.defaultProps={
    title:'Button',
    color:'balck'
}

Button.propTypes={
    title : PropTypes.string,
    onClick : PropTypes.func,
}

export default Button
