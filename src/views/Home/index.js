import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import WithLayout from '../../containers/WithLayout.js'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            a: 1
        }
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