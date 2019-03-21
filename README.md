## axios async get

### 這裡使用了 `axios-mock-adapter`
```
npm install --save axios-mock-adapter
```

### 1/4 Search.test.js

```js
import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import SearchContainer from './Search'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios)

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SearchContainer {...setupProps} />)
}
jest.mock('../api')

describe('App', () => {
    describe('when the button is clicked', () => {
        const spy = jest.spyOn(SearchContainer.prototype, 'getData');
        const wrapper = setup()
        const mockData = { bpi: { USD: { rate_float: 5 } } };
        beforeEach(() => {
            const mock = new MockAdapter(axios);
            mock.onGet("https://api.coindesk.com/v1/bpi/currentprice.json")
                .reply(200, mockData);
        })
        test('calls the `getData` function', () => {
            expect(spy).toHaveBeenCalled();
        });
        test('sets the `state.rate` to the bitcoin exchange rate that we    get from the GET request', () => {
            const btn = findByTestAttr(wrapper, 'btn-click')
            btn.simulate('click')
            setTimeout(() => {
                expect(wrapper.state().rate).toEqual(mockData.bpi.USD.rate_float);
            }, 1000)
        });

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
    }
    componentDidMount() {
        this.getData()
    }
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


## 參考文章
https://medium.com/@zach.grusznski/how-to-use-axios-mock-adapter-to-test-network-requests-in-react-475e99cda5ea

https://blog.bitsrc.io/how-to-test-react-components-using-jest-and-enzyme-fab851a43875

async 教學文
https://www.gabrielnordeborn.se/testing-async-react-components-with-enzyme-and-jest/
https://github.com/airbnb/enzyme/issues/346

關於 sinon
https://blog.kazaff.me/2016/11/11/%E8%AF%91-Sinon%E5%85%A5%E9%97%A8%EF%BC%9A%E5%88%A9%E7%94%A8Mocks%EF%BC%8CSpies%E5%92%8CStubs%E5%AE%8C%E6%88%90javascript%E6%B5%8B%E8%AF%95/