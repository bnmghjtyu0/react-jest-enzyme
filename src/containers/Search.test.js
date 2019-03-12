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




// jest.mock("../api/")

describe("Search container", () => {
    test("方法一: 使用 sinon.stub 不執行原本的程式碼", async () => {
        const promise = Promise.resolve();
        // sinon.stub = 不執行原本的程式碼
        sinon.stub(global, 'fetch').callsFake(promise)
        const wrapper = mount(<SearchContainer />)
        return promise.then(() => {
            expect(wrapper.state()).toHaveProperty('articles', []);
            wrapper.update();
        }).then(() => {
            expect(wrapper.state().articles).toHaveLength(0)
        });
    })
    // test("方法二: 不使用 sinon.stub", async () => {
    //     const wrapper = mount(<SearchContainer />)
    //     expect(wrapper.state().articles).toEqual([])
    //     const res = await wrapper.instance().performSearch()
    //     return res().then(() => {
    //         expect(wrapper.state().articles).toHaveLength(2)
    //     })
    // })
})