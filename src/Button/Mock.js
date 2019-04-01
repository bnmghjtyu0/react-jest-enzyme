import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
class Mock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }

    getAllGoods = () => {
        // 使用 axios 中的 get Function 獲得資料
        return axios.get('url/allGoods').then((resp) => {
            return resp.data
        })
    }


    render() {
        // console.log(this.state.counter)
        return (
            <div>
            </div>
        )
    }
}

export default Mock