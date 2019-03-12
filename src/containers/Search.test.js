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
    return shallow(<SearchContainer {...setupProps} />)
}
let mockBlogPosts

beforeEach(() => {
    // Before each test, we reset mockBlogPots, and mock fetch globally
    // to return a list of blog posts.

    mockBlogPosts = [
        {
            id: 1,
            title: 'First post',
        },
        {
            id: 2,
            title: 'Second post',
        },
        {
            id: 3,
            title: 'Third post',
        },
    ]

    global.fetch = jest.fn(async () => ({
        ok: true,
        status: 200,
        json: async () => ({
            data: mockBlogPosts,
        }),
    }))

    /**
     * Wrapping our function in jest.fn() turns it into an actual mock
     * function, which makes it possible to do assertions on it being
     * called with the right URL and so on. We do a pretty dumb
     * mock of it here, meaning that it could be called with the
     * wrong URL and still return the right result in our tests.
     *
     * Something worth thinking about when you write your own tests.
     */
})

test('fetchBlogPosts fetches blog posts', async () => {
    const wrapper = mount(<SearchContainer />)
    const res = await wrapper.instance().fetchBlogPosts()
    expect(res.length).toEqual(mockBlogPosts.length)
})