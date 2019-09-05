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