import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }

    increment = () => {
        let { counter } = this.state
        counter += 1
        this.setState({
            counter
        })
    }
    render() {
        // console.log(this.state.counter)
        return (
            <div>

                <button data-test="increment-button" onClick={this.increment}>Increment</button>

            </div>
        )
    }
}

export default Button