import React from 'react';
import PropTypes from 'prop-types';
import QuestionAndAnswerEntry from './QuestionAndAnswerEntry';

const QuestionsAnswersList = ({ productName, questions, answers }) => (
  <div data-testid="qa-list">
    {questions.results.map((question) => (
      <QuestionAndAnswerEntry
        productName={productName}
        key={question.question_id}
        question={question}
        answers={answers.results}
      />
    ))}
  </div>
);

QuestionsAnswersList.propTypes = {
  questions: PropTypes.shape({
    product_id: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      question_id: PropTypes.number,
      question_body: PropTypes.string,
      question_date: PropTypes.string,
      asker_name: PropTypes.string,
      question_helpfulness: PropTypes.number,
      reported: PropTypes.bool,
    })),
  }).isRequired,
  answers: PropTypes.shape({
    question: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      answer_id: PropTypes.number,
      body: PropTypes.string,
      date: PropTypes.string,
      answerer_name: PropTypes.string,
      helpfulness: PropTypes.number,
      photos: PropTypes.arrayOf(PropTypes.string),
    })),
  }).isRequired,
};

export default QuestionsAnswersList;
