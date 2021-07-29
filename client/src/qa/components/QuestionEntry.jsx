import React from 'react';
import styled from 'styled-components';

const divStyle = {
  border: '1px solid red',
};

const QuestionEntry = ({ question }) => (
  <div style={divStyle}>
    <h3>
      <StyledSpan>Q:</StyledSpan>
      <span>{question.question_body}</span>
    </h3>
  </div>
);

const StyledSpan = styled.div`
  width: 1.5em;
  display: inline-block;
  border: 1px solid red;
`;

export default QuestionEntry;
