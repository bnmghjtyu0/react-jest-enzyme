import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps, withLayoutStore } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'

const setup = () => {
    return shallow(<Button />)
}

describe('', () => {
    test('hoc', () => {
        const wrapper = mount(setup().get(0))
        console.log(wrapper.debug())
        const increment = sinon.spy();
        const button = findByTestAttr(wrapper, 'increment-button')
        button.simulate('click')
        setTimeout(() => {
            expect(increment.calledOnce).toBe(true)
        }, 1000)
    })
})