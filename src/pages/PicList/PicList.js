
import React, { Component } from 'react'
import ScrollPicker from '../../cmps/ScrollPicker'
import './PicList.scss'

class PicList extends Component {
    constructor(props) {
        super(props)
        this.pic1 = React.createRef()
    }

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
    check() {
        // console.log('    pic:',this.pic1.current)
        console.log('pic:', this.pic1.current.clientHeight)
    }
    render() {
        var hello = setInterval(this.check.bind(this), 1000)
        var pics = this.demoImgs.map((student) => {
            return (
                <div className="student-container" key={student._id}>
                    <img src={student.src} alt="" />
                    <div className="hint">{student.name}</div>
                </div>
            )
        })
        return (
            <section className="pics-list">
                <div onClick={this.check.bind(this)} className="student-container">
                    <div ref={this.pic1}>
                        <h1>LALALALA</h1>
                        <ScrollPicker/>
                    </div>
                </div>
                {pics}
            </section>
        )
    }
}

export default PicList
