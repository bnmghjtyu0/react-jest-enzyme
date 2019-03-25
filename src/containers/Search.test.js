import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import Search from './Search'
import api from '../services/unsplash'

jest.mock("../services/unsplash");

test("fetches images from unsplash and renders them on mount", done => {
    const wrapper = shallow(<Search />);
    setTimeout(() => {
        wrapper.update();

        const state = wrapper.instance().state;
        console.log(state)
        expect(state.term).toEqual("Mountains");
        expect(state.status).toEqual("done");
        expect(state.images.length).toEqual(1);

        done();
    });
});