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
    const goods = [{ name: 'Milk' }, { name: 'Apple' }]
    const res = { data: goods }
    // 為 axios 中的 get 模擬回傳值為 res
    axios.get.mockResolvedValue(res)

    /*
      執行並替回傳值進行斷言，
      這時候 axios 已經被 jest.mock 給模擬了，
      所以 getAllGoods 內的 axios.get 其實不會執行，
      只會回傳用 mockResolvedValue 指定的內容而已
    */
    return wrapper.instance().getAllGoods().then((resp) => {
        // 從回傳結果中做斷言（第一個產品為 Milk）
        expect(resp[0].name).toEqual('Milk')
    })
})