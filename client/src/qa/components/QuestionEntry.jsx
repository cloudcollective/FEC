import React from 'react';
import styled from 'styled-components';

const QuestionEntry = ({ question }) => (
  <>
    <FirstCol><h3>Q: </h3></FirstCol>
    <SecondCol><h3>{question.question_body}</h3></SecondCol>
  </>
);

const FirstCol = styled.div`
  grid-column: 1 / span 1
`;

const SecondCol = styled.div`
  grid-column: 2 / span 1;
`;

export default QuestionEntry;
