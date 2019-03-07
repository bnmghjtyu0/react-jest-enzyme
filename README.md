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
    handleChange = () => {
        console.log(123123)
    }

    render() {
        return (
            <div>
                <select data-test="component-select" onChange={this.handleChange}>
                    <option value="3">123</option>
                </select>
            </div>
        )
    }
}

export default Select
```

### 執行測試

```
npm run test:coverage
```