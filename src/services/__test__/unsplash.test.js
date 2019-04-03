import React from 'react'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Unsplash from '../unsplash';

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Unsplash {...setupProps} />)
}

describe('', () => {
    const mockData = [{ "title": 1 }]
    const wrapper = setup()
    beforeEach(async () => {
        // 使用 MockAdapter 可以建立假的 get api
        var mock = new MockAdapter(axios);
        mock.onGet('https://jsonplaceholder.typicode.com/posts').reply(200, mockData);

        // 執行專案程式碼
        await wrapper.instance().getAllGoods()
    })
    test('', () => {
        expect(wrapper.instance().state.datas).toEqual(mockData);

    })
})
