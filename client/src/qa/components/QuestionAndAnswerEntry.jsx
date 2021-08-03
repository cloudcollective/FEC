import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionEntry from './QuestionEntry';
import AnswerEntry from './AnswerEntry';

const QuestionAndAnswerEntry = ({ productName, question, answers }) => {
  const [slicer, setSlicer] = useState(2);

  // Sort answers and then slice
  const sortedAnswers = [...answers].sort((a, b) => b.helpfulness - a.helpfulness);
  const initialAnswers = sortedAnswers.slice(0, slicer);
  const [currentAnswers, setCurrentAnswers] = useState(initialAnswers);
  const numOfAnswersLeft = sortedAnswers.length - currentAnswers.length;
  const showMoreAnswers = () => numOfAnswersLeft > 0;

  useEffect(() => {
    setCurrentAnswers(sortedAnswers.slice(0, slicer));
  }, [slicer]);

  return (
    <StyledContainer key={question.question_id}>
      <QuestionEntry
        key={question.question_id}
        question={question.question_body}
        helpfulness={question.question_helpfulness}
        questionId={question.question_id}
        productName={productName}
      />
      {currentAnswers.map((answer, index) => (
        <AnswerEntry
          first={index === 0}
          key={answer.id}
          answer={answer}
        />
      ))}
      {showMoreAnswers()
        && (
          <SecondCol>
            <button
              onClick={() => setSlicer(slicer + 2)}
              type="button"
            >
              See More Answers
            </button>
          </SecondCol>
        )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 8fr 2fr;
  align-items: center;
`;

const SecondCol = styled.div`
  grid-column: 2 / span 1;
`;

QuestionAndAnswerEntry.propTypes = {
  question: PropTypes.shape({
    answers: PropTypes.shape({
      answer_id: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      answerer_name: PropTypes.string,
      helpfulness: PropTypes.number,
      photos: PropTypes.arrayOf(PropTypes.string),
    }),
    question_id: PropTypes.number,
    question_body: PropTypes.string,
    question_date: PropTypes.string,
    asker_name: PropTypes.string,
    question_helpfulness: PropTypes.number,
    reported: PropTypes.bool,
  }).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    answer_id: PropTypes.number,
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  productName: PropTypes.string.isRequired,
};

export default QuestionAndAnswerEntry;
