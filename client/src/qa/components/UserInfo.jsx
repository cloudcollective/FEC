import React from 'react';
import styled from 'styled-components';

const formatDate = (date) => {
  const d = new Date(date);
  const [day, month, year] = [
    d.getDate(),
    d.toLocaleString('default', { month: 'long' }),
    d.getFullYear(),
  ];
  return `${month} ${day}, ${year}`;
};

const UserInfo = ({ username, date, helpfulness }) => (
  <p> {`by ${username}, ${formatDate(date)} | Helpful? `}
    <StyledLinkButton type="button" onClick={()=>{}}>Yes</StyledLinkButton>
     {` (${helpfulness}) | `}
     <StyledLinkButton onClick={()=>{}}>Report</StyledLinkButton>
  </p>
);

const StyledLinkButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  display: inline;
  margin: 0;
  padding: 0;
`;

export default UserInfo;
