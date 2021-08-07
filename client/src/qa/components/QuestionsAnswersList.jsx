import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionAndAnswerEntry from './QuestionAndAnswerEntry';

const QuestionsAnswersList = ({
  productName, questions, slicer, setDisplayMoreQuestions
}) => {
  const [currentQuestions, setCurrentQuestions] = useState(null);
  const [sortedQuestions, setSortedQuestions] = useState(null);

  const sortByHelpfulness = (a, b) => b.question_helpfulness - a.question_helpfulness;

  useEffect(() => {
    if (questions.length) {
      setSortedQuestions([...questions].sort(sortByHelpfulness));
    }
  }, [questions]);

  useEffect(() => {
    if (sortedQuestions !== null) {
      const initialQuestions = sortedQuestions.slice(0, slicer);
      setCurrentQuestions(initialQuestions);
    }
  }, [sortedQuestions]);

  useEffect(() => {
    if (sortedQuestions !== null) {
      const newSortedQuestions = sortedQuestions.slice(0, slicer);
      setCurrentQuestions(newSortedQuestions);
      if (sortedQuestions.length - newSortedQuestions.length <= 0) {
        setDisplayMoreQuestions(false);
      }
    }
  }, [slicer, sortedQuestions]);

  if (!currentQuestions) {
    return (
      <h4>Loading questions...</h4>
    );
  }

  return (
    <ScrollableContainer data-testid="qa-list">
      {currentQuestions.map((question) => (
        <QuestionAndAnswerEntry
          productName={productName}
          key={question.question_id}
          question={question}
          answers={Object.values(question.answers)}
        />
      ))}
    </ScrollableContainer>
  );
};

const ScrollableContainer = styled.div`
  max-height: 100vh;
  overflow-y: auto;
`;

QuestionsAnswersList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  )]),
  productName: PropTypes.string.isRequired,
  slicer: PropTypes.number.isRequired,
  setDisplayMoreQuestions: PropTypes.func.isRequired,
};

QuestionsAnswersList.defaultProps = {
  questions: [],
};

export default QuestionsAnswersList;
