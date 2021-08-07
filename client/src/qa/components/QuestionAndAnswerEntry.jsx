import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionEntry from './QuestionEntry';
import AnswerEntry from './AnswerEntry';
import ButtonLink from './common/ButtonLink';

const QuestionAndAnswerEntry = ({ productName, question, answers }) => {
  // Sort answers and then slice
  const allSortedAnswers = [...answers].sort((a, b) => b.helpfulness - a.helpfulness);
  const initialAnswers = allSortedAnswers.slice(0, 2);
  const [currentAnswers, setCurrentAnswers] = useState(initialAnswers);
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  useEffect(() => {
    if (showAllAnswers) {
      setCurrentAnswers(allSortedAnswers);
    } else {
      setCurrentAnswers(initialAnswers);
    }
  }, [showAllAnswers]);

  const handleShowAnswersClick = () => {
    setShowAllAnswers(!showAllAnswers);
  };

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
      {allSortedAnswers.length > 2
        && (
          <SecondCol>
            <StyledButtonContainer>
              <ButtonLink
                label={showAllAnswers ? 'Collapse Answers' : 'See More Answers'}
                bold
                onClick={handleShowAnswersClick}
                type="button"
              />
            </StyledButtonContainer>
          </SecondCol>
        )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 8fr 3fr;
  align-items: center;
  background-color: #FFFFFF;
  padding: 20px;
  margin: 20px 0;
  &:hover {
    background-color: #FCFCFC;
  }
  & p {
    margin: 0.5em 0;
  }
  & h4 {
    margin: 0.5em 0;
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 20px;
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
