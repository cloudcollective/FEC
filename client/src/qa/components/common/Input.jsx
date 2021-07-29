import React from 'react';
import styled from 'styled-components';

const Input = ({ name, label, maxLength, placeholder, value, onChange, afterInput }) => (
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
    {afterInput && <p><small>{afterInput}</small></p>}
  </>
);

const StyledInput = styled.input`
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

export default Input;
