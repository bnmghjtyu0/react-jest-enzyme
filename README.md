## 測試 Button

### Button.test.js

```js
import React from 'react'
import { shallow, mount } from "enzyme";
import { findByTestAttr, checkProps } from '../../../test/testUtils';
import sinon from 'sinon';
import Button from '../Button'

const defaultProps = {}

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Button {...setupProps} />)
}
describe('increment function', () => {
    test('increment-button', () => {
        const wrapper = shallow(<Button name="app" />)
        // console.log(wrapper.props())
        // console.log(wrapper.state())
        // console.log(wrapper.instance().props)
        // >>  {name:'app'}
        expect(wrapper.instance().props.name).toBe('app')
    })
    test('按鈕更新', () => {
        const wrapper = mount(<Button />)
        const button = findByTestAttr(wrapper, 'increment-button')
        // console.log(w.props())
        // >> onClick: [Function]
        button.simulate('click')
        // console.log(wrapper.state())
        // >> {counter:1}
        expect(wrapper.state().counter).toEqual(1)

    })
})
describe('props function', () => {
    test('onClose', () => {
        const wrapper = setup()
        const onClose = sinon.spy();
        const w = findByTestAttr(wrapper, 'component-button')
        w.simulate('click');
        setTimeout(() => {
            expect(onClose.calledOnce).toBe(true);
        }, 1000)
    });
})

describe('hh function', () => {
    test('hh-button if kk > 0', () => {
        const wrapper = setup()
        const spy = sinon.spy();
        wrapper.setState({ kk: 1 })
        const w = findByTestAttr(wrapper, 'hh-button')
        w.simulate('click');
        setTimeout(() => {
            expect(spy.calledOnce).toBe(true);
        }, 1000)
    })
    test('hh-button if kk = 0', () => {
        const wrapper = setup()
        const spy = sinon.spy();
        wrapper.setState({ kk: 0 })
        const w = findByTestAttr(wrapper, 'hh-button')
        w.simulate('click');
        setTimeout(() => {
            expect(spy.calledOnce).toBe(true);
        }, 1000)
    })
})
describe('mm function', () => {
    test('mm-button preventDefault', () => {
        const wrapper = setup()
        const spy = sinon.spy();
        wrapper.setState()
        const w = findByTestAttr(wrapper, 'mm-button')
        w.simulate('click', {
            preventDefault: () => { }
        });
        setTimeout(() => {
            expect(spy.calledOnce).toBe(true);
        }, 1000)
    })
})

describe('cc function', () => {
    test('cc, cs>0', () => {
        const wrapper = setup()
        wrapper.setState({ cs: 10 })
        const spy = sinon.spy();
        const w = findByTestAttr(wrapper, 'component-li')
        setTimeout(() => {
            expect(w.length).toBe(1)
        }, 1000)

    })
    test('cc, cs=0', () => {
        const wrapper = setup()
        wrapper.setState({ cs: 0 })
        const spy = sinon.spy();
        const w = findByTestAttr(wrapper, 'component-li')
        setTimeout(() => {
            expect(w.length).toBe(1)
        }, 1000)
    })
})
```
### Button.js

```js
// Button.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            kk: 0,
            cs: -1
        }

    }
    cc() {
        var ul = []
        var li = []
        if (this.state.cs > 0) {
            li.push(<li data-test="component-li" key={0}>123</li>)
            ul.push(<ul key={0}>{li}</ul>)
        } else {
            li.push(<li data-test="component-li" key={0}>444</li>)
            ul.push(<ul key={0}>{li}</ul>)
        }
        return ul
    }

    hh = () => {
        if (this.state.kk > 0) {
            console.log('kk')
        } else {
            console.log('hh')
        }
    }
    mm = (e) => {
        e.preventDefault()
    }
    increment = () => {
        let { counter } = this.state
        counter += 1
        this.setState({
            counter
        })
    }
    render() {
        return (
            <div>
                <button data-test="component-button" onClick={this.props.onClose}>取消</button>
                <button data-test="hh-button" onClick={this.hh}>hh</button>
                <button data-test="mm-button" onClick={e => this.mm(e)}>hh</button>
                <button data-test="increment-button" onClick={this.increment}>Increment</button>
                {this.cc()}
                {this.state.counter}
            </div>
        )
    }
}

export default Button
```

### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)