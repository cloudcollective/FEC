import React from 'react';
import styled from 'styled-components';

const TextareaInput = ({ name, label, maxLength, value, onChange, afterInput }) => (
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
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`;

export default TextareaInput;
