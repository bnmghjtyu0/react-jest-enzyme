import React, { Component } from 'react'

const WithLayout = WrappedComponent => props => {
    return (
        <div>
            withLayout
            <div className="container-fluid page-body-wrapper">
                <React.Fragment>
                    <WrappedComponent {...props} />
                </React.Fragment>
            </div>
        </div>
    )
}
export default WithLayout
