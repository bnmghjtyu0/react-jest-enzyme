import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import SearchContainer from './Search'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
let mock = new MockAdapter(axios)

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SearchContainer {...setupProps} />)
}

describe('App', () => {
    describe('when the button is clicked', () => {
        const spy = jest.spyOn(SearchContainer.prototype, 'getData');
        const wrapper = setup()
        const mockData = { bpi: { USD: { rate_float: 5 } } };
        beforeEach(() => {
            const mock = new MockAdapter(axios);
            mock.onGet("https://api.coindesk.com/v1/bpi/currentprice.json")
                .reply(200, mockData);
        })
        test('calls the `getData` function', () => {
            expect(spy).toHaveBeenCalled();
        });
        test('sets the `state.rate` to the bitcoin exchange rate that we    get from the GET request', () => {
            const btn = findByTestAttr(wrapper, 'btn-click')
            btn.simulate('click')
            setTimeout(() => {
                expect(wrapper.state().rate).toEqual(mockData.bpi.USD.rate_float);
            }, 1000)
        });

    });
});
