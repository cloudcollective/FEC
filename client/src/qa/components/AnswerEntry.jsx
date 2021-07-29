import React from 'react';
import styled from 'styled-components';

const AnswerEntry = ({ answer }) => {
  console.log(answer);
  return (
    <p>{answer.body}</p>
  )
}
//   <div style={divStyle}>
//     <span>{answer}</span>
//   </div>
// );

const StyledSpan = styled.div`
  width: 1.5em;
  display: inline-block;
  border: 1px solid red;
`;

export default AnswerEntry;
