import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import assert from 'assert';
import LifeCycle from '../LifeCycle'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<LifeCycle {...setupProps} />)
}
test('Lifecycle', () => {
    const wrapper = setup()
    assert(wrapper.instance().count === 3);
    assert(wrapper.instance().history.length === 3);
    assert(wrapper.instance().history[0] === 'componentWillMount');
    assert(wrapper.instance().history[1] === 'render');
    assert(wrapper.instance().history[2] === 'componentDidMount');
    wrapper.instance().componentDidMount();
    assert(wrapper.instance().count === 4);
    assert(wrapper.instance().history[3] === 'componentDidMount');
});