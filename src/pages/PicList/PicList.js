
import React, { Component } from 'react'
import ScrollPicker from '../ScrollPicker'
import './PicList.scss'

class PicList extends Component {

    picSrc = 'http://nfic-2016.ieeesiliconvalley.org/wp-content/uploads/sites/17/2017/03/Generic-Person-Image.jpg'
    demoImgs = [
        { name: 'Yossi', src: this.picSrc, _id: 1 },
        { name: 'Gabi', src: this.picSrc, _id: 2 },
        { name: 'Nitta', src: this.picSrc, _id: 3 },
        { name: 'Roy', src: this.picSrc, _id: 4 },
        { name: 'Sami', src: this.picSrc, _id: 5 },
        { name: 'Ofer', src: this.picSrc, _id: 6 },
        { name: 'Candy', src: this.picSrc, _id: 7 },
    ]

    render() {
        var pics = this.demoImgs.map((student) => {
            return (
                <div className="student-container" key={student._id}>
                    <button className="hint">{student.name}</button>
                    <img src={student.src} alt="" />
                </div>
            )
        })
        return (
            <section className="pics-list">
                <ScrollPicker options={pics} />
            </section>
        )
    }
}

export default PicList
