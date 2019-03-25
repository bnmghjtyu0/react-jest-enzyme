## axios async get

## 測試 api
```
https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&query=term
```

### 1/4 Search.test.js

```js
import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import SearchContainer from './Search'
import api from '../api'
jest.mock('../api')

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SearchContainer {...setupProps} />)
}

describe('App', () => {
    it('calls the `getData` function', async () => {
        const _getParkingApi = () => {
            return Promise.resolve({
                response: {
                    bpi: { USD: { rate_float: 5 } }
                }
            })
        }
        let res = await _getParkingApi();

        const wrapper = setup()
        const btn = findByTestAttr(wrapper, 'btn-click')
        btn.simulate('click')
        console.log(res)
        wrapper.setState({
            rate: res.response.bpi.USD.rate_float
        })
        expect(wrapper.state().rate).toEqual(5)
    });
});

```

### 2/4 Search.js
```js
import React from "react";
import _getParkingApi from "../api/"
import axios from 'axios'
class SearchContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rate: ""
        }
        this.getData = this.getData.bind(this);
    }
    // componentDidMount() {
    //     this.getData()
    // }
    async getData() {
        // const result = await axios.get("https://api.coindesk.com/v1/bpi/currentprice.json");
        const result = await _getParkingApi("/v1/bpi/currentprice.json");
        this.setState({ rate: result.data.bpi.USD.rate_float });
    }
    render() {
        return (
            <div>
                <button data-test="btn-click" className="btn" onClick={this.getData}>
                    GET DATA
                  </button>
                <h1>{this.state.rate}</h1>
            </div>
        )
    }
}

export default SearchContainer;
```

### 3/4 api/index.js

```js

import axios from 'axios'

const _getParkingApi = (params) => {
    let set = axios({
        method: "get",
        url: `https://api.coindesk.com/${params}`
    })
    return set
}

export default _getParkingApi
```
### 4/4 api/__mock__/index.js

使用 jest.mock('../api') 調用
```js
const _getParkingApi = () => {
    return Promise.resolve({
        response: {
            bpi: { USD: { rate_float: 5 } }
        }
    })
}
export default _getParkingApi
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