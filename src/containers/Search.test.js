import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../test/testUtils';
import SearchContainer from './Search'
import Search from '../components/Search/index'
import api from '../api/index'
// mocking the API response we need to do some additional configurations
const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SearchResults {...setupProps} />)
}

jest.mock("../api/")

describe("Search container", () => {
    test("renders", () => {
        const wrapper = shallow(<SearchContainer />)
        expect(wrapper.exists()).toBe(true)
    })
    test("should render Search component", () => {
        const wrapper = mount(<SearchContainer />)
        expect(wrapper.children(Search).length).toEqual(1)
    })
    test("should update articles state", () => {
        const wrapper = mount(<SearchContainer />)
        expect(wrapper.state().articles).toEqual([])
        const { performSearch } = wrapper.find(Search).props();
        return performSearch().then(() => {
            expect(wrapper.state().articles).toHaveLength(10)
        })
    })

})