import React from 'react';
import PropTypes from 'prop-types';
import Button from './common/Button';

const AddAnswerBtn = ({ setIsVisible }) => (
  <Button
    type="button"
    onClick={() => setIsVisible(true)}
    label="Add Answer"
  />
);

AddAnswerBtn.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
};

export default AddAnswerBtn;
