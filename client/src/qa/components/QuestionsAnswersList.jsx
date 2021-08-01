import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuestionAndAnswerEntry from './QuestionAndAnswerEntry';
import Button from './common/Button';

const QuestionsAnswersList = ({ productName, questions }) => {
  const [slicer, setSlicer] = useState(2);
  const [currentQuestions, setCurrentQuestions] = useState(null);
  const [numOfQuestionsLeft, setNumOfQuestionsLeft] = useState(null);

  useEffect(() => {
    if (questions.length) {
      const initialQuestions = questions.slice(0, slicer);
      setCurrentQuestions(initialQuestions);
      setNumOfQuestionsLeft(questions.length - initialQuestions.length);
    }
  }, [questions]);

  useEffect(() => {
    if (questions.length) {
      setCurrentQuestions(questions.slice(0, slicer));
      setNumOfQuestionsLeft(questions.length - currentQuestions.length);
    }
  }, [slicer]);

  if (!currentQuestions) {
    return (
      <h4>Loading questions...</h4>
    );
  }

  return (
    <div data-testid="qa-list" style={{ height: '100vh', overflowY: 'auto' }}>
      {currentQuestions.map((question) => (
        <QuestionAndAnswerEntry
          productName={productName}
          key={question.question_id}
          question={question}
          answers={Object.values(question.answers)}
        />
      ))}
      {numOfQuestionsLeft > 0
        && (
          <Button
            type="button"
            label="See More Questions"
            onClick={() => setSlicer(slicer + 2)}
          />
        )}
    </div>
  );
};

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
