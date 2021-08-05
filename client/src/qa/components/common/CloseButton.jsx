import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CloseButton = ({ type, onClick }) => (
  <StyledCloseButton
    type={type}
    onClick={onClick}
    aria-label="Close"
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
  color: #272727;
  &:hover {
    opacity: .8;
    color: #767676;
    border: none;
  }
`;

CloseButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CloseButton;
