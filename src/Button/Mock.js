import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Mock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }

    }

    // 判斷該產品是否有折扣
    checkDiscount = (name) => {
        if (name === 'milk') {
            return true
        }
        return false
    }

    // 計算購買產品的總額
    calculateThePrice = (goods, checkDiscount) => {
        let totalPrice = 0
        goods.forEach((item) => {
            // 先計算原價
            let price = Number(item.price) * Number(item.count)

            // 如果有折扣要半價
            if (this.checkDiscount(item.name)) {
                price *= 0.5
            }

            // 將價格加到總合上
            totalPrice += price
        })
        return totalPrice
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