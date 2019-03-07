import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kk: 0,
            cs: -1
        }

    }
    cc() {
        var ul = []
        var li = []
        if (this.state.cs > 0) {
            li.push(<li data-test="component-li" key={0}>123</li>)
            ul.push(<ul key={0}>{li}</ul>)
        } else {
            li.push(<li data-test="component-li" key={0}>444</li>)
            ul.push(<ul key={0}>{li}</ul>)
        }
        return ul
    }

    hh = () => {
        if (this.state.kk > 0) {
            console.log('kk')
        } else {
            console.log('hh')
        }
    }
    mm = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <button data-test="component-button" onClick={this.props.onClose}>取消</button>
                <button data-test="hh-button" onClick={this.hh}>hh</button>
                <button data-test="mm-button" onClick={e => this.mm(e)}>hh</button>
                {this.cc()}
            </div>
        )
    }
}

export default Button