### 目標

當 `history.push` 一個 query params 的時候, 改變 state 的狀態

- Button.js (父)
- Block.js (子)


```jsx
// Button.js

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import Block from './Block'
class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'apple'
        }

    }
    componentDidMount() {
        const params = new URLSearchParams(this.props.location.search)
        if (!params.has('day')) {
            this.props.history.push({
                pathname: '/',
                search: '?day=123'
            })
            this.setState({
                name: 'banana'
            })
        }
    }

    render() {
        // const params = new URLSearchParams(this.props.location.search)
        // console.log('day: ' + params.get('day'))
        return (
            <div>
                <Block name={this.state.name} />
            </div>
        )
    }
}

export default withRouter(Button)
```

```jsx
// Block.js

import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
const Block = ({ name, history, location }) => {
    const [a, setA] = useState(name)
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        if (params.has('day')) {
            setA('77777')
        }
    })
    return (
        <div>
            {a}
        </div>
    )
}
export default withRouter(Block)
```