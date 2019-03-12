import React from 'react'
import { shallow, mount } from "enzyme";
import { waitForElement } from 'enzyme-async-helpers'
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
    test("should update articles state", async () => {
        const wrapper = mount(<SearchContainer />)
        expect(wrapper.state().articles).toEqual([])
        const res = await wrapper.instance().performSearch()
        console.log(wrapper.state().articels)
    })

})