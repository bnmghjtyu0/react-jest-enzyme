## 測試 Button

### Button.test.js

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'
import WithLayout from '../../containers/WithLayout'


// 測試 hoc 方法一 : mount + shallow
test("renders correctly", () => {
  const wrapper = mount(shallow(<Button />).get(0))
  console.log(wrapper)
});
```
### Button.js

```js
// Button.js
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
### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)