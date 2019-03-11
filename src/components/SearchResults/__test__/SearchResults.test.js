import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import SearchResults from '../index'


const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SearchResults {...setupProps} />)
}

const articles = [
    {
        url: "123",
        user: '44'
    }
]
describe("SearchResults component", () => {
    test("renders", () => {
        const wrapper = setup({ articles })
        expect(wrapper).toMatchSnapshot()
    })
    test("returns the default empty array when there is no data to map through", () => {
        const wrapper = setup()
        expect(wrapper).toMatchSnapshot()
    })
    test("doesn't break without articles", () => {
        const wrapper = setup()
        expect(wrapper.find('li')).toHaveLength(0)
    })
    test("doesn't break with an empty array", () => {
        const articles = []
        const wrapper = setup({ articles })
        expect(wrapper.find('li')).toHaveLength(0)
    })
})