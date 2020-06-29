import React from 'react'

const Header = ({ text }) => {
    return (
        <div>
            <h1 className='fancy' data-testid='h1tag'>{text}</h1>
        </div>
    )
}

export default Header
