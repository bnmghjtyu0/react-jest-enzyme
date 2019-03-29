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
                <button type="button" data-test="btn-openModal" class="btn btn-primary" onClick={this.openModal}>
                    open modal
                </button>

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                Modal head
                            </div>
                            <div class="modal-body">
                                I'm Modal, Modal is me.
      </div>
                            <div class="modal-footer">
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