import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Mock from '../Mock'
import axios from 'axios'
const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Mock {...setupProps} />)
}

// 使用 jset.mock 自動模擬整個 axios 模組
jest.mock('axios')

test('should fetch goods', () => {
    const wrapper = setup()
    // 使用 jset.spyOn 模擬 axios 中的 get Function
    const spyFn = jest.spyOn(axios, 'get')

    // 這時候 getAllGoods 真的會執行 axios.get 的邏輯，並將 response 的資料回傳
    return wrapper.instance().getAllGoods().then((resp) => {
        // 下斷言驗證該 Mock 是否有被執行
        expect(spyFn.mock.calls.length).toBe(1)
        // 打印出真正 response 的資料
        console.log(resp)
    })
})