import React from 'react';
import PropTypes from 'prop-types';
import QuestionAndAnswerEntry from './QuestionAndAnswerEntry';

const QuestionsAnswersList = ({ productName, questions }) => (
  <div data-testid="qa-list">
    {!questions.length
      ? <h4>Loading questions...</h4>
      : questions.map((question) => (
        <QuestionAndAnswerEntry
          productName={productName}
          key={question.question_id}
          question={question}
          answers={Object.values(question.answers)}
        />
      ))}
  </div>
);

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
};

QuestionsAnswersList.defaultProps = {
  questions: PropTypes.object,
};

export default QuestionsAnswersList;
