import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import Search from './Search'
import api from '../services/unsplash'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Search {...setupProps} />)
}

jest.mock("../services/unsplash");

test('t', done => {
    const wrapper = shallow(<Search />)

    setTimeout(() => {
        wrapper.update()
        console.log(wrapper.debug())

        const state = wrapper.instance().state;
        console.log(state)
        expect(state.images.length).toEqual(1)

        done()
    })
})