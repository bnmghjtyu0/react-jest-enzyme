import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import SetProps from '../SetProps'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SetProps {...setupProps} />)
}
describe('SetProps', () => {

    test('SetProps', () => {
        const wrapper = setup({ isOpen: true })
        console.log(wrapper.debug())
    })

})