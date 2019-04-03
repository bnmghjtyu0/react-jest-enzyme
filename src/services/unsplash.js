import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import fetch from '../http'
class Unsplash extends Component {
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
        return fetch.fetchPostsList('https://jsonplaceholder.typicode.com/posts', res => {
            this.setState({
                datas: res.data
            })
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

export default Unsplash