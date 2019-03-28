## 測試 react-router

### Home.test.js
使用 mount 需要加入 <Router>

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { MemoryRouter } from 'react-router'

const defaultProps = {}

describe('home', () => {
    test('component-home', () => {

        // mount
        // const wrapper = mount(
        //     <MemoryRouter>
        //         <Home />
        //     </MemoryRouter>)
        // console.log(wrapper.find(Home).instance())

        // shallow
        const wrapper = shallow(
            <MemoryRouter>
                <Home />
            </MemoryRouter>)
        console.log(wrapper.find(Home).dive().instance())


        const componentHome = findByTestAttr(wrapper, 'component-home')
        expect(componentHome.length).toBe(1)
    })
})


```

### Home.js
```js
import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div data-test="component-home">
            <Link to="/">首頁</Link>
            <Link to="/about">關於我們</Link>
            <h4>首頁</h4>
        </div>
    )
}

export default withRouter(Home)
```

### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)