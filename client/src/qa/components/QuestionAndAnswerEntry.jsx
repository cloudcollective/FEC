import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionEntry from './QuestionEntry';
import AnswerEntry from './AnswerEntry';

const QuestionAndAnswerEntry = ({ question, answers }) => {
  const [slice, setSlice] = useState(2);
  const initialAnswers = answers.slice(0, slice);
  const [currentAnswers, setCurrentAnswers] = useState(initialAnswers);
  const numOfAnswersLeft = answers.length - currentAnswers.length;

  return (
    <div>
      <QuestionEntry question={question} />
      {currentAnswers.map((answer, index) => (
        <AnswerEntry key={index} answer={answer} />
      ))}
      {numOfAnswersLeft
        && <button onClick={() => {
          // setCurrentAnswers(prevAnswers => ...prevAnswers, answers)
        }} type="button">See More Answers</button>}
    </div>
  );
};

export default QuestionAndAnswerEntry;
