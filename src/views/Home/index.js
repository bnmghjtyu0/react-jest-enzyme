import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
class Home extends React.Component {
    state = {
        a: 1
    }
    render() {
        return (
            <div data-test="component-home">
                <Link to="/">首頁</Link>
                <Link to="/about">關於我們</Link>
                <h4>首頁</h4>
            </div>
        )
    }
}

export default Home