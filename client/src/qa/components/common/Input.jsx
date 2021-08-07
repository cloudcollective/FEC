import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = ({
  name, label, maxLength, placeholder, value, onChange, afterInput,
}) => (
  <>
    <label htmlFor={name}>
      {label}
      <StyledInput
        id={name}
        name={name}
        type="text"
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
    {afterInput && <DisclaimerText>{afterInput}</DisclaimerText>}
  </>
);

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #272727;
  background-color: #fff;
  border: 1px solid #767676;
  &:focus {
    outline: none;
    border: 1px solid #272727;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  }
`;

const DisclaimerText = styled.p`
  font-size: 0.7em;
  font-style: italic;
  margin-top: 2px !important;
`;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  afterInput: PropTypes.string,
};

Input.defaultProps = {
  afterInput: null,
};

export default Input;
