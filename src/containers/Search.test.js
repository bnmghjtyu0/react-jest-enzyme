import React from 'react'
import { shallow } from "enzyme";
import { findByTestAttr } from '../../test/testUtils';
import SearchContainer from './Search'
import api from '../api'
jest.mock('../api')

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<SearchContainer {...setupProps} />)
}

describe('App', () => {
    it('calls the `getData` function', async () => {
        const _getParkingApi = () => {
            return Promise.resolve({
                response: {
                    bpi: { USD: { rate_float: 5 } }
                }
            })
        }
        let res = await _getParkingApi();

        const wrapper = setup()
        const btn = findByTestAttr(wrapper, 'btn-click')
        btn.simulate('click')
        console.log(res)
        wrapper.setState({
            rate: res.response.bpi.USD.rate_float
        })
        expect(wrapper.state().rate).toEqual(5)
    });
});