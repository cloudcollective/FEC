import React, { useState } from 'react';

const QuestionEntry = ({question, answers}) => (
  <div style={divStyle}>
    <div>
      <h3>
        Q:
        {question.question_body}
      </h3>
      <h3>A: </h3>
      {answers.map((answer) => (
        <p key={answer.answer_id}>{answer.body}</p>
      ))}
    </div>
  </div>
);

const divStyle = {
  border: '1px solid red',
};

export default QuestionEntry;
