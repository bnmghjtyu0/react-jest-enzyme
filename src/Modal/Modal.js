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