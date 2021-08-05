import React from 'react';
import styled from 'styled-components';

const Divider = () => (
  <StyledLine>
    <p>|</p>
  </StyledLine>
);

const StyledLine = styled.div`
  padding: 0 0.8em;

  & p {
    font-size: 1em;
    font-family: 'Arial', 'Helvetica', sans-serif;
  }
`;

export default Divider;
