
import React from 'react'

import './ScrollPicker.scss'

const ScrollPicker = (props) => {
    const isTouchable = typeof window !== 'undefined' && 'ontouchstart' in window;
    console.log(isTouchable)
    return (
        <h1>
            {isTouchable + ''}
        </h1>
    )
}

export default ScrollPicker
