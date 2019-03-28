import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import WithLayout from '../../containers/WithLayout.js'
class About extends React.Component {
    state = {
        a: 2
    }
    render() {
        return (
            <div data-test="component-home">
                <h4>關於我們</h4>
            </div>
        )
    }
}

export default WithLayout(About)