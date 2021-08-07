import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonLink = ({
  type, label, onClick, small,
}) => (
  <StyledButtonLink
    type={type}
    onClick={onClick}
    small={small}
  >
    {label}
  </StyledButtonLink>
);

const StyledButtonLink = styled.button`
font-size: ${(props) => (props.small ? '0.8em' : 'inherit')};
background-color: transparent;
border: none;
cursor: pointer;
text-decoration: underline;
display: inline;
margin: 0;
padding: 0;
&:hover {
  color: #767676;
  border: none;
  text-decoration: none;
}
`;

ButtonLink.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  small: PropTypes.bool,
};

ButtonLink.defaultProps = {
  small: false,
};

export default ButtonLink;
