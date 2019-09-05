import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'
import { MemoryRouter } from 'react-router-dom'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return mount(<MemoryRouter><Button {...setupProps} /></MemoryRouter>)
}
describe('increment function', () => {
    test('increment-button', () => {
        const wrapper = setup()

    })

})