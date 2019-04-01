import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Mock from '../Mock'
import axios from 'axios'
import fetch from '../https/axios'
const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Mock {...setupProps} />)
}

test('使用jest.spyOn()监控fetch.fetchPostsList被正常调用', async () => {
    const wrapper = setup()
    const spyFn = jest.spyOn(fetch, 'fetchPostsList');
    await wrapper.instance().getAllGoods();
    // console.log(wrapper.instance().state.datas)
    expect(spyFn).toHaveBeenCalled();
    expect(spyFn).toHaveBeenCalledTimes(1);
})