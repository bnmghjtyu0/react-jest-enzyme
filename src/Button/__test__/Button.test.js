import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Button {...setupProps} />)
}
describe('increment function', () => {
    test('increment-button', () => {
        const wrapper = setup()
        const increment = jest.fn()
        // console.log(wrapper.props())
        // console.log(wrapper.state())
        // console.log(wrapper.instance().props)
        // >>  {name:'app'}

        const incrementButton  = findByTestAttr(wrapper,'increment-button')
        incrementButton.simulate('click')
         wrapper.setState({ counter: 1 })
        console.log(wrapper.state())
        expect(wrapper.state().counter).toBe(1)
    })

})