import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextareaInput = ({
  name, label, maxLength, value, onChange, afterInput,
}) => (
  <>
    <label htmlFor={name}>
      {label}
      <StyledTextarea
        id={name}
        name={name}
        type="text"
        rows="8"
        cols="40"
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
    </label>
    {afterInput && <p><small>{afterInput}</small></p>}
  </>
);

const StyledTextarea = styled.textarea`
  display: block;
  box-sizing: border-box;
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
  }
`;

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  afterInput: PropTypes.string,
};

TextareaInput.defaultProps = {
  afterInput: null,
};

export default TextareaInput;
