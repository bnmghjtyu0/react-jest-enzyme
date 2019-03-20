import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { MemoryRouter } from 'react-router'

const defaultProps = {}

describe('home', () => {
    test('component-home', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>)
        const componentHome = findByTestAttr(wrapper, 'component-home')
        expect(componentHome.length).toBe(1)
    })
})

