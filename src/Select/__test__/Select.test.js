import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Select from '../Select'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Select {...setupProps} />)
}


describe('select', () => {
    test('select, ', () => {
        const wrapper = setup()
        const w = findByTestAttr(wrapper, 'component-select')
        w.simulate('change', { target: { value: "two" } })
        expect(w.find('option').at(1).props().value).toBe("two")
    })
    test('select onChange ', () => {
        const wrapper = setup()
        const handleChangeSpy = sinon.spy();
        const w = findByTestAttr(wrapper, 'component-select')
        w.simulate('change', { target: { value: "two" } })
        setTimeout(() => {
            expect(handleChangeSpy.calledOnce).toBe(true);
        }, 1000)

    })
})