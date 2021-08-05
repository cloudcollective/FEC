import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Form from './common/Form';
import Modal from './common/Modal';

const formFields = {
  textareas: [
    { name: 'question', label: 'Your Question*', maxLength: '1000' },
  ],
  inputs: [
    {
      name: 'nickname',
      label: 'What is your nickname*',
      placeholder: 'Example: jackson11!',
      maxLength: '60',
      afterInput: 'For privacy reasons, do not use your full name or email address',
    },
    {
      name: 'email',
      label: 'What is your email*',
      placeholder: 'Example: jack@email.com',
      maxLength: '60',
      afterInput: 'For authentication reasons, you will not be emailed',
    },
  ],
};

const QuestionModal = ({
  productName, isVisible, setIsVisible, productId,
}) => {
  const postQuestion = (inputs) => {
    const options = {
      method: 'post',
      url: '/qa/questions',
      data: {
        inputs,
        productId,
      },
    };

    return axios(options);
  };

  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <h3>Ask Your Question</h3>
      <h4>
        {`About the ${productName}`}
      </h4>
      <Form
        formFields={formFields}
        buttonLabel="Submit question"
        doSubmit={postQuestion}
      />
    </Modal>
  );
};

QuestionModal.propTypes = {
  productName: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
  productId: PropTypes.string,
};

export default QuestionModal;
