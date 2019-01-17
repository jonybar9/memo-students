
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
                <li key={name}>
                    <h3> {name}</h3>
                </li>
            )
        })
        return (
            <section>
                <ul>
                    {namesStr}
                </ul>
            </section>
        )
    }
}

export default NameList
