import Enzyme, { shallow, render, mount, configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import sinon from 'sinon'
configure({ adapter: new EnzymeAdapter(), disableLifecycleMethods: true });

global.sinon = sinon
global.shallow = shallow
global.render = render
global.mount = mount
global.sinon = sinon