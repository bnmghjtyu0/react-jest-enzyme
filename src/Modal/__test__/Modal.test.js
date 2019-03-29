import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Modal from '../Modal'

import $ from 'jquery'
$.fn.modal = jest.fn();

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Modal {...setupProps} />)
}
describe('modal', () => {
    test('open modal', () => {
        const wrapper = setup()
        const btnOpenModal = findByTestAttr(wrapper, 'btn-openModal')
        btnOpenModal.simulate('click')
    })

})