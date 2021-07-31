import React from 'react';
import PropTypes from 'prop-types';
import QuestionsAnswersList from './components/QuestionsAnswersList';
import SearchQuestions from './components/SearchQuestions';
import AddQuestionBtn from './components/AddQuestionBtn';
import QuestionModal from './components/QuestionModal';
import useToggle from './components/common/useToggle';

const QuestionsAnswersContainer = ({ questions, answers }) => {
  const { on, toggle } = useToggle(false);

  return (
    <div>
      <h3>
        Questions &#38; Answers
      </h3>
      <SearchQuestions />
      <QuestionsAnswersList
        questions={questions}
        answers={answers}
      />
      <AddQuestionBtn setIsVisible={toggle} />
      <QuestionModal
        isVisible={on}
        setIsVisible={toggle}
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
