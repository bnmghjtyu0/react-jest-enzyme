## 測試 Button

### Button.test.js

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps, withLayoutStore } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'


// 測試 hoc 方法一 : mount + shallow
// test("renders correctly", () => {
//     const wrapper = shallow(<Button />)
//     // console.log(wrapper.debug())
//     const a = mount(wrapper.get(0))
//     console.log(a)
// });

// 測試 hoc 方法二 : 需要搭配 testUtiles
const setup = () => {
    return shallow(<Button />)
}
setup()

describe('', () => {
    test('hoc', () => {
        const wrapper = mount(setup().get(0))
        // console.log(wrapper.debug())
        const increment = sinon.spy();
        const button = findByTestAttr(wrapper, 'increment-button')
        button.simulate('click')
        setTimeout(() => {
            expect(increment.calledOnce).toBe(true)
        }, 1000)
    })
})
```
### Button.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import WithLayout from '../containers/WithLayout'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            foo: 'Foo',
        }
    }

    increment = () => {
        let { counter } = this.state
        counter += 1
        this.setState({
            counter
        })
    }
    render() {

        return (
            <div>
                <button data-test="increment-button" onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default WithLayout(Button)
```

### WithLayout.js
```js
import React, { Component } from 'react'

const WithLayout = WrappedComponent => props => {
    return (
        <div>
            withLayout
            <div className="container-fluid page-body-wrapper">
                <React.Fragment>
                    <WrappedComponent {...props} />
                </React.Fragment>
            </div>
        </div>
    )
}
export default WithLayout

```

## testUtiles.js

```js
import checkPropTypes from 'check-prop-types'
import withLayout from '../src/containers/WithLayout'

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute of for search.
 * @returns {ShallowWraper}
 */

const withLayoutStore = () => {
    return withLayout()
}


const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
    expect(propError).toBeUndefined()
}

export { withLayoutStore, findByTestAttr, checkProps }
```
### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)