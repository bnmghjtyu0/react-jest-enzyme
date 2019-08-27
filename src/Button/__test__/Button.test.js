import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return mount(<Button {...setupProps} />)
}
describe('Button', () => {
    test('ref', () => {
        const iniitalState = {
            toggle: false
        }
        const wrapper = setup({ ...iniitalState })
        const btn = findByTestAttr(wrapper, 'increment-button')
        btn.simulate('click', 1)
        expect(wrapper.state().toggle).toBeTruthy()
        btn.simulate('click', 1)
        expect(wrapper.state().toggle).toBeFalsy()
    })

})