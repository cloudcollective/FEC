import React from 'react';
import Form from './Form';
import Modal from './common/Modal';

const AnswerModal = ({ isVisible, setIsVisible }) => (
  <Modal
    isVisible={isVisible}
    setIsVisible={setIsVisible}
  >
    <h3>Add an Answer</h3>
    <Form />
  </Modal>
);

export default AnswerModal;
