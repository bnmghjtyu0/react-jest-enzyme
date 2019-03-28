import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const WithLayout = WrappedComponent => props => {
    return (
        <div>
            <Link to="/">首頁</Link>
            <Link to="/about">關於我們</Link>
            <div className="container-fluid page-body-wrapper">
                <WrappedComponent {...props} />
            </div>
        </div>
    )
}
export default WithLayout
