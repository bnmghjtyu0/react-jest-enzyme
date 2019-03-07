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
        wrapper.simulate('change', { target: { value: "two" } })
        expect(wrapper.find('option').at(1).props().value).toBe("two")
    })
})