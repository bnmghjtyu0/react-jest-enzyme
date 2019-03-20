import React from 'react'
import { withRouter } from 'react-router'
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


export default withRouter(Home)