import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <button data-test="component-congrats" onClick={this.props.onClose}>取消</button>
        )
    }
}

export default Button