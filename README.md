## 測試 MOCK

### Mock.test.js

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Mock from '../Mock'
import axios from 'axios'
import fetch from '../https/axios'
const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Mock {...setupProps} />)
}

test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async () => {
    const wrapper = setup()
    const spyFn = jest.spyOn(fetch, 'fetchPostsList');
    await wrapper.instance().getAllGoods();
    expect(spyFn).toHaveBeenCalled();
    expect(spyFn).toHaveBeenCalledTimes(1);
})
```
### Mock.js

```js
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
        return fetch.fetchPostsList('/posts', res => {
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

export default Mock
```

### https/axios.js

```js
import axios from 'axios';

export default {
    async fetchPostsList(method, callback) {
        return axios.get(`https://jsonplaceholder.typicode.com${method}`).then(res => {
            return callback(res);
        })
    }
}
```

### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)