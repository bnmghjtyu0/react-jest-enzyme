## 測試 SetProps

### SetProps.test.js

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import SetProps from '../SetProps'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SetProps {...setupProps} />)
}
describe('SetProps', () => {

    test('SetProps', () => {
        const wrapper = setup({ isOpen: true })
        console.log(wrapper.debug())
    })

})
```
### SetProps.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class SetProps extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.isOpen ? <h2>open</h2> : <h2>hide</h2>}
            </div>
        )
    }
}

export default SetProps
```

### 執行測試

```
npm run test:coverage
```