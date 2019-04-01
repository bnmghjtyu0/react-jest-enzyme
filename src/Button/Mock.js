import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import fetch from './https/axios'
class Mock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datas: []
        }

    }
    componentDidMount() {
        this.getAllGoods()
    }

    getAllGoods = async () => {

        return fetch.fetchPostsList(data => {
            this.setState({
                datas:data
            })
            // do something
        });
    }

    render() {
        // console.log(this.state.counter)
        return (
            <pre>
                {JSON.stringify(this.state.datas)}
            </pre>
        )
    }
}

export default Mock