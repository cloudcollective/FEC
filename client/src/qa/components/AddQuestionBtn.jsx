import React from 'react';
import PropTypes from 'prop-types';

const AddQuestionBtn = ({ setIsVisible }) => (
  <button
    type="button"
    onClick={() => setIsVisible(true)}
  >
    Add Question
  </button>
);

AddQuestionBtn.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
};

export default AddQuestionBtn;
