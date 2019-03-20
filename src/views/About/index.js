import React from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div data-test="component-about">
            <Link to="/">首頁</Link>
            <Link to="/about">關於我們</Link>
            <h4>關於我們</h4>
        </div>
    )
}


export default withRouter(About)