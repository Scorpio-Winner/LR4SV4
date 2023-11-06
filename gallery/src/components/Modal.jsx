import React, { Component } from 'react';

import '../styles/Modal.css';

class Modal extends Component {
  handleCloseClick = () => {
    const { closeModal } = this.props;
    closeModal();
  };

  render() {
    const { message } = this.props;

    return (
      <div id="modal" className="modal">
        <div className="modal-content">
          <span className="close-button" id="close-button" onClick={this.handleCloseClick}>
            &times;
          </span>
          <p id="modal-message">{message}</p>
        </div>
      </div>
    );
  }
}

export default Modal;