## 測試 MOCK

### Mock.test.js

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Mock from '../Mock'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Mock {...setupProps} />)
}

describe('Test calulate the price', () => {
    test('Test can return expect price', () => {
        const wrapper = setup()
        // 創建一個產品物件提供測試
        const shoppingCart = [
            { name: 'milk', price: 39, count: 2 },
            { name: 'apple', price: 25, count: 3 },
        ]
        // 建立 Mock 取代 CheckDiscount
        const mockCheckDiscount = jest.fn()
        // 設定回傳值
        mockCheckDiscount
            .mockReturnValueOnce(true)
            .mockReturnValue(false)
        // 確認判斷折扣這件事確實執行了兩次

        // 確認期望是否正確
        expect(wrapper.instance().calculateThePrice(shoppingCart, mockCheckDiscount())).toBe(114)
        expect(mockCheckDiscount.mock.calls.length).toBe(1)
    })

})

```
### Mock.js

```js
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
```

### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)