import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
    constructor(props) {
        super(props)
    }
    handleChange = (e) => {
        console.log(e.target.value)
    }
    render() {
        return (
            <select data-test="component-select" onChange={e => this.handleChange(e)}>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        )
    }
}

export default Select