
import React, { Component } from 'react'
import NameList from '../NameList'
import PicList from '../PicList'
import './Main.scss'

class Main extends Component {

    render() {
        return (
            <main className="main-container">
                <PicList/>
                <NameList />
            </main>
        )
    }
}

export default Main
