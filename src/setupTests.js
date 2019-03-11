import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new EnzymeAdapter() });

class LocalStorage {
    constructor() {
        this.store = {}
    }

    getItem(key) {
        return this.store[key]
    }

    setItem(key, string) {
        this.store[key] = string
    }

    clear() {
        this.store = {}
    }
}

global.localStorage = new LocalStorage;