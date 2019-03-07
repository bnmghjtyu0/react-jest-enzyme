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

describe('props function', () => {
    test('goPrev-button if totalPage <= 10, ', () => {
        const wrapper = setup()
        wrapper.setState()
        const spy = sinon.spy();
        const w = findByTestAttr(wrapper, 'component-select')
        w.simulate('change', { value: '3' });
        setTimeout(() => {
            expect(spy.calledOnce).toBe(true);
        }, 1000)
    })
})