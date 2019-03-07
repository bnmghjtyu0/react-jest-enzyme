## 測試 LifeCycle

### LifeCycle.test.js

```js
// LifeCycle.test.js

import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import assert from 'assert';
import LifeCycle from '../LifeCycle'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<LifeCycle {...setupProps} />)
}
test('Lifecycle', () => {
    const wrapper = setup()
    assert(wrapper.instance().count === 3);
    assert(wrapper.instance().history.length === 3);
    assert(wrapper.instance().history[0] === 'componentWillMount');
    assert(wrapper.instance().history[1] === 'render');
    assert(wrapper.instance().history[2] === 'componentDidMount');
    wrapper.instance().componentDidMount();
    assert(wrapper.instance().count === 4);
    assert(wrapper.instance().history[3] === 'componentDidMount');
});
```
### LifeCycle.js

```js
// LifeCycle.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycle extends Component {
    constructor(props) {
        super();
        this.count = 0;
        this.history = [];
    }

    componentWillMount() {
        this.count = this.count + 1;
        this.history.push('componentWillMount');
    }
    componentDidMount() {
        this.count = this.count + 1;
        this.history.push('componentDidMount');
    }
    render() {
        this.count = this.count + 1;
        this.history.push('render');
        return <div>foo</div>;
    }
}

export default LifeCycle
```

### 執行測試

```
npm run test:coverage
```