## 測試 Router

### Home.test.js
使用 mount 需要加入 <Router>

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { BrowserRouter as Router } from 'react-router-dom' // 寫法一
import { MemoryRouter } from 'react-router' // 寫法二

const defaultProps = {}

describe('react-router', () => {
    test('寫法一', () => {
        const wrapper = mount(
            <Router>
                <Home />
            </Router>)
        console.log(wrapper.props())
    })
    test('寫法二', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );
        console.log(wrapper.props())

    });
})



```

### Home.js
```js
import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
            <Link to="/">首頁</Link>
            <Link to="/about">關於我們</Link>
            <h4>首頁</h4>
        </div>
    )
}


export default Home
```

### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)