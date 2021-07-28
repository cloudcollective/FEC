import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuestionsAnswersList from './components/QuestionsAnswersList';
import SearchQuestions from './components/SearchQuestions';
import AddQuestionBtn from './components/AddQuestionBtn';
import Modal from './components/Modal';

const divStyle = {
  border: '1px solid blue',
};

const QuestionsAnswersContainer = ({ questions, answers }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={divStyle}>
      <h3>
        Questions &#38; Answers
      </h3>
      <SearchQuestions />
      <QuestionsAnswersList
        questions={questions}
        answers={answers}
      />
      <AddQuestionBtn setIsVisible={setIsVisible} />
      <Modal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};

QuestionsAnswersContainer.propTypes = {
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

export default QuestionsAnswersContainer;
