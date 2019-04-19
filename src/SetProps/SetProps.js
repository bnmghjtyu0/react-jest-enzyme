import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SetProps extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        // console.log(this.state.counter)
        return (
            <div>

                {this.props.isOpen ? <h2>open</h2> : <h2>hide</h2>}

            </div>
        )
    }
}

export default SetProps