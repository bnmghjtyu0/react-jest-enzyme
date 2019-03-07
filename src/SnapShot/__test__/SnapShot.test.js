import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import SnapShot from '../SnapShot'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SnapShot {...setupProps} />)
}

describe('props function', () => {
    test('render a label', () => {
        const wrapper = setup()
        expect(wrapper).toMatchSnapshot();
    })
})
