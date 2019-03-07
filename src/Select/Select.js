import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <select data-test="component-select">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        )
    }
}

export default Select