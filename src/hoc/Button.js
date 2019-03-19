import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WithLayout from '../containers/WithLayout'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
             foo: 'Foo',
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

        return (
            <div>
                <button data-test="increment-button" onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default WithLayout(Button)