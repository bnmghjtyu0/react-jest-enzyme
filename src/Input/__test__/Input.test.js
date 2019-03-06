import React from 'react'
import { shallow } from "enzyme";
// import { findByTestAttr, checkProps } from '../../../test/testUtils';
import Input from '../Input'

// const defaultProps = { success: false }

/**
* Factory function to create a ShallowWrapper for the App component
* @function setup
* param {object} props - Component props specific to this setup
* @param {any} state - Initial state for setup.
* @returns {ShallowWraper}
*/

const setup = (props = {}) => {
    const wrapper = shallow(<Input />).dive()
    console.log(wrapper.debug())
}

setup()

// error  TypeError: ShallowWrapper::dive() can not be called on Host Components