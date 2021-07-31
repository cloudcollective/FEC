import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from './common/ButtonLink';

const AddAnswerBtn = ({ setIsVisible }) => (
  <ButtonLink
    type="button"
    label="Add Answer"
    onClick={() => setIsVisible(true)}
  />
);

AddAnswerBtn.propTypes = {
  setIsVisible: PropTypes.func.isRequired,
};

export default AddAnswerBtn;
