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

it('onClose', () => {
    const wrapper = setup()
    const onClose = sinon.spy();
    const w = findByTestAttr(wrapper, 'component-congrats')
    w.simulate('click');
    setTimeout(() => {
        expect(onClose.calledOnce).toBe(true);
    }, 1000)
});