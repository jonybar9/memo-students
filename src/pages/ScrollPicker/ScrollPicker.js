
import React, { Component } from 'react'

import './ScrollPicker.scss'

class ScrollPicker extends Component {
    constructor(props) {
        super(props)
        this.options = props.options
        this.isTouchable = typeof window !== 'undefined' && 'ontouchstart' in window;
        this.elContainer = React.createRef()
    }
    
    componentDidMount() {
       this.addHandlingFuncs()
    }
    componentWillUnmount() {
        this.removeHandlingFuncs()
    }
    

    render() {
        return (
            <section ref= {this.elContainer}>
                {this.options}
            </section>
        )
    }
    
    
    getTouchInfo(ev) {
        return this.isTouchable? ev.changedTouches[0] || ev.touches[0] : ev;
    }

    handleStart(ev) {
        console.log(ev)
        if (ev.cancelable) {
            // ev.preventDefault();
            ev.stopPropagation();
        }
        const touchInfo = this.getTouchInfo(ev);

    }
    handleEnd(ev) {
        console.log('END touch')
    }
    handleMove(ev) {
        console.log('am moving touch')
    }
    handleCancel(ev) {
        console.log('canceling touch')
    }

    handleClick(ev) {
        console.log('moving up or down by one')
    }

    handleWheel(ev) {
        console.log('i am currently supporting only touchScreens')
    }











    

    addHandlingFuncs() {
        var $el = this.elContainer.current
        if (this.isTouchable) {
            $el.addEventListener('touchstart', this.handleStart.bind(this));
            $el.addEventListener('touchmove', this.handleMove.bind(this));
            $el.addEventListener('touchend', this.handleEnd.bind(this));
            $el.addEventListener('touchcancel', this.handleCancel.bind(this));
        } else {
            console.log('i am, untouchable untouchable')
            // $el.addEventListener('mousewheel', this.handleWheel.bind(this));
            // $el.addEventListener('wheel', this.handleWheel).bind(this); // for IE
            // $el.addEventListener('mousedown', this.handleStart).bind(this);
            // $el.addEventListener('mousemove', this.handleMove).bind(this);
            // $el.addEventListener('mouseup', this.handleEnd).bind(this);
            // $el.addEventListener('mouseleave', this.handleCancel).bind(this);
        }
    }
    removeHandlingFuncs() {
        var $el = this.elContainer.current
        if (this.isTouchable) {
            this.$el.removeEventListener('touchstart', this.handleStart);
            this.$el.removeEventListener('touchmove', this.handleMove);
            this.$el.removeEventListener('touchend', this.handleEnd);
            this.$el.removeEventListener('touchcancel', this.handleCancel);
        } else {
            this.$el.removeEventListener('mousewheel', this.handleWheel);
            this.$el.removeEventListener('wheel', this.handleWheel); // for IE
            this.$el.removeEventListener('mousedown', this.handleStart);
            this.$el.removeEventListener('mousemove', this.handleMove);
            this.$el.removeEventListener('mouseup', this.handleEnd);
            this.$el.removeEventListener('mouseleave', this.handleCancel);
        }
    }
}

export default ScrollPicker
