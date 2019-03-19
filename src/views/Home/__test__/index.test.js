import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { BrowserRouter as Router } from 'react-router-dom'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return mount(<Router><Home {...setupProps} /></Router>)
}
describe('increment function', () => {
    test('increment-button', () => {
        const wrapper = setup()
        console.log(wrapper)
    })

})