import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Mock from '../Mock'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Mock {...setupProps} />)
}

describe('Test calulate the price', () => {
    test('Test can return expect price', () => {
        const wrapper = setup()
        // 創建一個產品物件提供測試
        const shoppingCart = [
            { name: 'milk', price: 39, count: 2 },
            { name: 'apple', price: 25, count: 3 },
        ]
        // 建立 Mock 取代 CheckDiscount
        const mockCheckDiscount = jest.fn()
        // 設定回傳值
        mockCheckDiscount
            .mockReturnValueOnce(true)
            .mockReturnValue(false)
        // 確認判斷折扣這件事確實執行了兩次

        // 確認期望是否正確
        expect(wrapper.instance().calculateThePrice(shoppingCart, mockCheckDiscount())).toBe(114)
        expect(mockCheckDiscount.mock.calls.length).toBe(1)
    })

})
