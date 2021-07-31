import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonLink = ({ type, label, onClick }) => (
  <StyledButtonLink
    type={type}
    onClick={onClick}
  >
    {label}
  </StyledButtonLink>
);

const StyledButtonLink = styled.button`
background-color: transparent;
border: none;
cursor: pointer;
text-decoration: underline;
display: inline;
margin: 0;
padding: 0;
font: inherit;
`;

ButtonLink.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonLink;
