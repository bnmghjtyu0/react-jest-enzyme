import React, { Component } from 'react'
const WithLayout = WrappedComponent => props => {
    return (
        <div>
            挖底瓦靠
            <div className="container-fluid page-body-wrapper">
                <WrappedComponent {...props} />
            </div>
        </div>
    )
}
export default WithLayout