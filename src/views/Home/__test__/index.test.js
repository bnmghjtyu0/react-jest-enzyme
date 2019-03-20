import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import sinon from 'sinon';
import Home from '../index'
import { BrowserRouter as Router } from 'react-router-dom'
import { MemoryRouter } from 'react-router'

const defaultProps = {}

describe('increment function', () => {
    test('increment-button', () => {
        const wrapper = mount(
            <Router>
                <Home />
            </Router>)
        console.log(wrapper.props())
    })
    // test('invalid path should redirect to 404', () => {
    //     const wrapper = mount(
    //         <MemoryRouter>
    //             <Home />
    //         </MemoryRouter>
    //     );
    //     console.log(wrapper.props())

    // });
})

