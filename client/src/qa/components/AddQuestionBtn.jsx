import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';

const AddQuestionBtn = ({ setIsVisible }) => (
  <Button
    type="button"
    onClick={() => setIsVisible(true)}
    label="Add Question"
  />
);

AddQuestionBtn.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
};

export default AddQuestionBtn;
