import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnswerEntry = ({ answer }) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const [day, year] = [d.getDate(), d.getFullYear()];
    const month = d.toLocaleString('default', { month: 'long' });
    return `${month} ${day}, ${year}`;
  };

  return (
    <>
      <p>{answer.body}</p>
      <p>by {answer.answerer_name}, {formatDate(answer.date)} | Helpful? <a href="#" onClick={()=>{}}>Yes</a> {'('}{answer.helpfulness}{')'} | <a href="#" onClick={()=>{}}>Report</a></p>
    </>
  );
};
//   <div style={divStyle}>
//     <span>{answer}</span>
//   </div>
// );

const StyledSpan = styled.div`
  width: 1.5em;
  display: inline-block;
  border: 1px solid red;
`;

AnswerEntry.propTypes = {
  answer: PropTypes.shape({
    answer_id: PropTypes.number,
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default AnswerEntry;
