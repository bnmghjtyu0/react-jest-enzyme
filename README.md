## 測試 localStorage

### src/setupTests.js

```js
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new EnzymeAdapter() });

class LocalStorage {
    constructor() {
        this.store = {}
    }

    getItem(key) {
        return this.store[key]
    }

    setItem(key, string) {
        this.store[key] = string
    }

    clear() {
        this.store = {}
    }
}

global.localStorage = new LocalStorage;
```
### src/Clock/index.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toDonts: [
                { title: 'title', body: 'body', id: 1 },
                { title: 'title', body: 'body', id: 2 }
            ]
        }
    }
    render() {
        return (
            <div>123</div>
        )
    }
}

export default Clock
```

### src/Clock/__test__/index.test.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Clock from '../index';


describe('local', () => {
    test('should save to localStorage', () => {
        const toDonts = [
            { title: 'title', body: 'body', id: 1 },
            { title: 'title', body: 'body', id: 2 }
        ]

        localStorage.setItem('toDonts', JSON.stringify(toDonts))

        const wrapper = mount(<Clock />)
        expect(wrapper.state().toDonts).toEqual(toDonts)
    });
})
```

### 執行測試

```
npm run test:coverage
```


### Reference

http://frontend.turing.io/lessons/module-2/testing-react.html