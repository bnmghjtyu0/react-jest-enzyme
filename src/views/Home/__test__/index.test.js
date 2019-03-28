import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { MemoryRouter } from 'react-router'
import { withRouter } from 'react-router/cjs/react-router';
import WithLayout from '../../../containers/WithLayout'
// const Layout = WithLayout(Home)
const defaultProps = {}

describe('home', () => {
    test('component-home', () => {
        const wrapper = mount(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        )
        console.log(wrapper.find('Home').instance())

        // const wrapper = mount(
        //     <MemoryRouter>
        //         <Home />
        //     </MemoryRouter>
        // )
        // console.log(wrapper.find(Home).type())


        // const componentHome = findByTestAttr(wrapper, 'component-home')
        // expect(componentHome.length).toBe(1)
    })
})

