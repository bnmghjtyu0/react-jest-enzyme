import React from 'react'
import PropTypes from 'prop-types'
/**
  * Functional react component for congratulatory message.
  * @function
  * @param {object} props - React props.
  * @returns {JSX.Element} - Rendered component (or null if `success` prop)
  */

const Congrats = (props) => {
    return <div/>
}
Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}
export default Congrats;