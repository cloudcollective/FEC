import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

const Modal = ({ isVisible, setIsVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div role="dialog" className="modal">
      <h3>Ask Your Question</h3>
      <Form />
      <button type="button" onClick={() => setIsVisible(false)}>Close</button>
    </div>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default Modal;
