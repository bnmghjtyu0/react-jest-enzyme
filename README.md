## 測試 bootstrap

## bootstrap 安裝
```
npm install --save bootstrap jquery
```

### Modal.test.js

```js
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
```
### Modal.js

```js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
class Modal extends Component {
    constructor(props) {
        super(props)
    }
    openModal = () => {
        $('#exampleModal').modal('show')
    }
    render() {
        return (
            <div>
                <button type="button" data-test="btn-openModal" className="btn btn-primary" onClick={this.openModal}>
                    open modal
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                Modal head
                            </div>
                            <div className="modal-body">
                                I'm Modal, Modal is me.
                            </div>
                            <div className="modal-footer">
                                Modal foot
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
```

### 執行測試

```
npm run test:coverage
```


### Reference

- [Testing React Components with Enzyme and Jest](https://www.youtube.com/watch?v=u5XTnNBotqs)