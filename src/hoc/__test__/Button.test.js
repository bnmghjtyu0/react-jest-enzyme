import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'
import WithLayout from '../../containers/WithLayout'


// 測試 hoc 方法一 : mount + shallow
test("renders correctly", () => {
  const wrapper = mount(shallow(<Button />).get(0))
  console.log(wrapper)
});