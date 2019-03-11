import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import Clock from '../index';


describe('local', () => {
    test('should save to localStorage', () => {
        const toDonts = [
            { title: 'title', body: 'body', id: 1 },
            { title: 'title', body: 'body', id: 2 }
        ]

        localStorage.setItem('toDonts', JSON.stringify(toDonts))

        const wrapper = mount(<Clock />)
        expect(wrapper.state().toDonts).toEqual(toDonts)
    });
})