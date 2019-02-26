import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without crashing', () => {
    const wrapper = shallow(<App />)
     console.log(wrapper.debug())
})
