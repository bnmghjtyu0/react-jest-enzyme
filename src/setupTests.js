import Enzyme, { shallow, configure } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import sinon from 'sinon'
configure({ adapter: new EnzymeAdapter(), disableLifecycleMethods: true });

global.sinon = sinon
