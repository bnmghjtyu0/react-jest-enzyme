import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import Search from './Search'
import api from '../services/unsplash'
import { MemoryRouter } from 'react-router'


test("fetches images from unsplash and renders them on mount", async () => {
    const wrapper = mount(
        <MemoryRouter>
            <Search />
        </MemoryRouter>);
    const res = await wrapper.find('Search').instance().fetchImages()

})