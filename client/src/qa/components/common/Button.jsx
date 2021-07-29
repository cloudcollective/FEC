import React from 'react';
import styled from 'styled-components';

const Button = ({ type, label, onClick }) => (
  <StyledButton
    type={type}
    onClick={onClick}
  >
    {label}
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 10px 20px;
  border: 1px solid #222;
  width: 100%;
  display: block;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    border: 1px solid #767676;
    color: #767676;
  }
`;

export default Button;
