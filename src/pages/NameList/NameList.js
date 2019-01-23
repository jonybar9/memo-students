
import React, { Component } from 'react'

import './NameList.scss'

class NameList extends Component {
    state = {
        names : ['Yossi', 'Gabi', 'Nitta', 'Roy', 'Sami', 'Ofer', 'Candy']
    }
    render() {
        const names = this.state.names
        var namesStr = names.map(name => {
            return (
                <li className="name-container" key={name}>
                    <h1> {name} </h1>
                </li>
            )
        })
        return (
            <section className="name-list">
                <ul>
                    {namesStr}
                </ul>
            </section>
        )
    }
}

export default NameList
