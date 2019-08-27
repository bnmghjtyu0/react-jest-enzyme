## 測試 ref

觀念: 測試 ref 必須使用 mount

### Button.test.js

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return mount(<Button {...setupProps} />)
}
describe('Button', () => {
    test('ref', () => {
        const iniitalState = {
            toggle: false
        }
        const wrapper = setup({ ...iniitalState })
        const btn = findByTestAttr(wrapper, 'increment-button')
        btn.simulate('click', 1)
        expect(wrapper.state().toggle).toBeTruthy()
        btn.simulate('click', 1)
        expect(wrapper.state().toggle).toBeFalsy()
    })

})
```
### Button.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggle: false
        }
        this.btnRef = React.createRef()
    }

    toggleColor = () => {
        this.setState({
            toggle: !this.state.toggle
        })
        if (this.state.toggle) {
            this.btnRef.current.style.background = 'red'
        }
        if (!this.state.toggle) {
            this.btnRef.current.style.background = 'blue'
        }
    }
    render() {
        // console.log(this.state.counter)
        return (
            <div>
                <button ref={this.btnRef} data-test="increment-button" onClick={this.toggleColor}>Increment</button>
            </div>
        )
    }
}

export default Button
```

### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)