import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <Link to="/">首頁</Link>
            <Link to="/about">關於我們</Link>
            <h4>關於我們</h4>
        </div>
    )
}


export default About