## 測試 react-router


### Home.test.js
```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { MemoryRouter } from 'react-router'
import { withRouter } from 'react-router/cjs/react-router';
import WithLayout from '../../../containers/WithLayout'
// const Layout = WithLayout(Home)
const defaultProps = {}

describe('home', () => {
    test('component-home', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        console.log(wrapper.find('Home').instance())

        // const componentHome = findByTestAttr(wrapper, 'component-home')
        // expect(componentHome.length).toBe(1)
    })
})



```

### Home.js
```js
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import WithLayout from '../../containers/WithLayout.js'
class Home extends React.Component {
    state = {
        a: 1
    }
    render() {
        return (
            <div data-test="component-home">
                <h4>首頁</h4>
            </div>
        )
    }
}

export default WithLayout(Home)
```



### withLayout.js
使用 mount 需要加入 <Router>

```js
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const WithLayout = WrappedComponent => props => {
    return (
        <div>
            <Link to="/">首頁</Link>
            <Link to="/about">關於我們</Link>
            <div className="container-fluid page-body-wrapper">
                <WrappedComponent {...props} />
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