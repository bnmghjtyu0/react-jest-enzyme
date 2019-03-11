import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDonts: [
                { title: 'title', body: 'body', id: 1 },
                { title: 'title', body: 'body', id: 2 }
            ]
        }
    }
    render() {
        return (
            <div>123</div>
        )
    }
}

export default Clock