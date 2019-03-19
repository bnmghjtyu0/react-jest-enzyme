import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps, withLayoutStore } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'


// 測試 hoc 方法一 : mount + shallow
// test("renders correctly", () => {
//     const wrapper = shallow(<Button />)
//     // console.log(wrapper.debug())
//     const a = mount(wrapper.get(0))
//     console.log(a)
// });

// 測試 hoc 方法二 : 需要搭配 testUtiles
const setup = () => {
    return shallow(<Button />)
}
setup()

describe('', () => {
    test('hoc', () => {
        const wrapper = mount(setup().get(0))
        // console.log(wrapper.debug())
        const increment = sinon.spy();
        const button = findByTestAttr(wrapper, 'increment-button')
        button.simulate('click')
        setTimeout(() => {
            expect(increment.calledOnce).toBe(true)
        }, 1000)
    })
})