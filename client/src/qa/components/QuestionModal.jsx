import React from 'react';
import Form from './Form';
import Modal from './common/Modal';

const QuestionModal = ({ productName, isVisible, setIsVisible }) => (
  <Modal
    isVisible={isVisible}
    setIsVisible={setIsVisible}
  >
    <h3>Ask Your Question</h3>
    <h4>
      About the {productName}
    </h4>
    <Form />
  </Modal>
);

export default QuestionModal;
