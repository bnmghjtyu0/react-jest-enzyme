import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { MemoryRouter } from 'react-router'

const defaultProps = {}

describe('home', () => {
    test('component-home', () => {

        // mount
        // const wrapper = mount(
        //     <MemoryRouter>
        //         <Home />
        //     </MemoryRouter>)
        // console.log(wrapper.find(Home).instance())

        // shallow
        const wrapper = shallow(
            <MemoryRouter>
                <Home />
            </MemoryRouter>)
        console.log(wrapper.find(Home).dive().instance())


        const componentHome = findByTestAttr(wrapper, 'component-home')
        expect(componentHome.length).toBe(1)
    })
})

