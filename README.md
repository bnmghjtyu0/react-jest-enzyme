## 測試 Button

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kk: 0,
            cs: -1
        }

    }
    render() {
        return (
            <select>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        )
    }
}

export default Select
```

### 執行測試

```
npm run test:coverage
```