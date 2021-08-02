import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CloseButton = ({ type, onClick }) => (
  <StyledCloseButton
    type={type}
    onClick={onClick}
  >
    <span>&times;</span>
  </StyledCloseButton>
);

const StyledCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding-top: 5px;
  padding-right: 10px;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-size: 1.5rem;
  color: darkgrey;
  &:hover {
    opacity: .3;
  }
`;

CloseButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
