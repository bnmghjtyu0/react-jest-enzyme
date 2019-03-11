import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../../test/testUtils';
import Search from '../index'
const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Search {...setupProps} />)
}
describe("Search Component", () => {
    test("renders", () => {
        const wrapper = setup()
        expect(wrapper.exists()).toBe(true)
    })

    test("user text is echoed", () => {
        const wrapper = shallow(<Search performSearch={() => { }} />);
        wrapper.find("input").simulate("change", {
            target: { value: "hello" }
        })

        expect(wrapper.find("input").props().value).toEqual("hello")
    })

    test("when the form is submitted the event is cancelled", () => {
        const wrapper = setup()
        let prevented = false;
        wrapper.find("form").simulate("submit", {
            preventDefault: () => {
                prevented = true
            }
        })
        expect(prevented).toBe(true)
    })
    test("renders search results when the articles change", () => {
        const wrapper = mount(<Search articles={[]} />)
        wrapper.setProps({
            articles: [{ url: "http://google.com", user: "Google Search" }]
        })
        expect(wrapper.find('a').prop('href')).toEqual("http://google.com")
    })
})