import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.btnRef = React.createRef()
    }

    toggleColor = () => {
        this.setState({
            toggle: !this.state.toggle
        })
        if (this.state.toggle) {
            this.btnRef.current.style.background = 'red'
        }
        if (!this.state.toggle) {
            this.btnRef.current.style.background = 'blue'
        }
    }
    render() {
        // console.log(this.state.counter)
        return (
            <div>
                <button ref={this.btnRef} data-test="increment-button" onClick={this.toggleColor}>Increment</button>
            </div>
        )
    }
}

export default Button