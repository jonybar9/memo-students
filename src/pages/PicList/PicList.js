
import React, { Component } from 'react'

import './PicList.scss'

class PicList extends Component {
    picSrc = 'http://nfic-2016.ieeesiliconvalley.org/wp-content/uploads/sites/17/2017/03/Generic-Person-Image.jpg'
    render() {
        return (
            <img src={picSrc} alt=""/>
        )
    }
}

export default PicList
