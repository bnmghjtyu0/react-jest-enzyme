## axios-mock-adapter

### 1/3 unsplash.test.js

```js
import React from 'react'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Unsplash from '../unsplash';

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Unsplash {...setupProps} />)
}

describe('', () => {
    const mockData = [{ "title": 1 }]
    const wrapper = setup()
    beforeEach(async () => {
        // 使用 MockAdapter 可以建立假的 get api
        var mock = new MockAdapter(axios);
        mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, mockData);

        // 執行專案程式碼
        await wrapper.instance().getAllGoods()
    })
    test('', () => {
        expect(wrapper.instance().state.datas).toEqual(mockData);

    })
})

```

### 2/3 unsplash.js
```js
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
```

### 3/3 http.js

```js
import axios from 'axios';

export default {
    async fetchPostsList(method, callback) {
        return axios.get(method).then(res => {
            console.log(res)
            return callback(res);
        })
    }
}
```

## 相關套件

### `axios-mock-adapter`
```
npm install --save axios-mock-adapter
```

## 參考文章
https://medium.com/@zach.grusznski/how-to-use-axios-mock-adapter-to-test-network-requests-in-react-475e99cda5ea

https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875

async 教學文
https://www.gabrielnordeborn.se/testing-async-react-components-with-enzyme-and-jest/
https://github.com/airbnb/enzyme/issues/346

關於 sinon
https://blog.kazaff.me/2016/11/11/%E8%AF%91-Sinon%E5%85%A5%E9%97%A8%EF%BC%9A%E5%88%A9%E7%94%A8Mocks%EF%BC%8CSpies%E5%92%8CStubs%E5%AE%8C%E6%88%90javascript%E6%B5%8B%E8%AF%95/