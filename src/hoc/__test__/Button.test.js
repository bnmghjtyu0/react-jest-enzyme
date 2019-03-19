import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'
import WithLayout from '../../containers/WithLayout'
const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    const wrapper = shallow(<Button />).dive()
    console.log(wrapper.debug())
}
setup()