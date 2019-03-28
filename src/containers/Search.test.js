import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import Search from './Search'
import api from '../services/unsplash'
import { MemoryRouter } from 'react-router'
import axios from 'axios'

const wrapper = mount(
    <MemoryRouter>
        <Search />
    </MemoryRouter>);
test("try success", async () => {
    // 1. state.images 沒有資料
    // console.log(wrapper.find('Search').instance().state.images)


    const res = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
            client_id:
                "4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964",
            query: 'Mountains'
        }
    })
    expect(res.status).toBe(200);
    const data = res.data.results
    // 2. state.images 取得資料
    wrapper.find('Search').instance().state.images
    expect(wrapper.find('Search').instance().state.images).toEqual(data)
})
test("catch error", async () => {
    // 1. state.images 沒有資料
    // console.log(wrapper.find('Search').instance().state.images)
    const res = await axios.get('https://api.unsplash.com/search/photos')
    expect(res.status).toBe(401);

})

