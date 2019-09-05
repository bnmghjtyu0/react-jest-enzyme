import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Block from './Block'
class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'apple'
        }

    }
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        if (!params.has('day')) {
            this.props.history.push({
                pathname: '/',
                search: '?day=123'
            })
            this.setState({
                name: 'banana'
            })
        }
    }

    render() {
        // const params = new URLSearchParams(this.props.location.search)
        // console.log('day: ' + params.get('day'))
        return (
            <div>
                <Block name={this.state.name} />
            </div>
        )
    }
}

export default withRouter(Button)