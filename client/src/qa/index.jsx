import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import QuestionsAnswersList from './components/QuestionsAnswersList';
import SearchQuestions from './components/SearchQuestions';
import AddQuestionBtn from './components/AddQuestionBtn';
import QuestionModal from './components/QuestionModal';
import useToggle from './components/common/useToggle';

const QuestionsAnswersContainer = ({ productId, questions, productN }) => {
  const [productName, setProductName] = useState('');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [resetDisplay, setResetDisplay] = useState(false);

  // For Add Question Modal
  const { on, toggle } = useToggle(false);

  // To handle display more questions
  const [displayMoreQuestions, setDisplayMoreQuestions] = useState(false);
  const [slicer, setSlicer] = useState(2);

  useEffect(() => {
    if (questions) {
      setCurrentQuestions(questions);
      setDisplayMoreQuestions(true);
    }
  }, [questions]);

  useEffect(() => {
    if (resetDisplay) {
      setCurrentQuestions(questions);
    }
  }, [resetDisplay]);

  useEffect(() => {
    if (productN) { setProductName(productN); }
  }, [productN]);

  const doFilter = (filterText, text) => (
    text.toLowerCase().includes(filterText.toLowerCase())
  );

  const eliminateAnswers = (filterText, arrayOfAnswers) => {
    const newAnswers = {};
    arrayOfAnswers.forEach((answer) => {
      if (doFilter(filterText, answer.body)) {
        newAnswers[answer.id] = answer;
      }
    });
    return newAnswers;
  };

  const handleSearchQuestions = (filterText) => {
    setResetDisplay(false);
    const results = [];
    const questionsToFilter = [...questions];
    questionsToFilter.forEach((question) => {
      let newQuestion = {};
      const filteredAnswers = eliminateAnswers(filterText, Object.values(question.answers));
      if (Object.keys(filteredAnswers).length) {
        newQuestion = { ...question, ...filteredAnswers };
        results.push(newQuestion);
      } else if (doFilter(filterText, question.question_body)) {
        results.push(question);
      }
    });
    setCurrentQuestions(results);
  };

  return (
    <>
      <h3 className="widget-title">
        Questions &#38; Answers
      </h3>
      {questions.length
        ? (
          <div>
            <SearchQuestions
              handleSearchQuestions={handleSearchQuestions}
              doReset={setResetDisplay}
            />
            <QuestionsAnswersList
              productName={productName}
              questions={currentQuestions}
              slicer={slicer}
              setDisplayMoreQuestions={setDisplayMoreQuestions}
            />
          </div>
        ) : null}
      <ButtonRow>
        {displayMoreQuestions
        && (
          <button
            style={{ marginRight: '15px' }}
            type="button"
            onClick={() => { setSlicer(slicer + 2); }}
          >
            More Answered Questions
          </button>
        )}
        <AddQuestionBtn setIsVisible={toggle} />
        <QuestionModal
          productId={productId}
          productName={productName}
          isVisible={on}
          setIsVisible={toggle}
        />
      </ButtonRow>
    </>
  );
};

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 15px 0;
`;

QuestionsAnswersContainer.propTypes = {
  productId: PropTypes.string,
};

QuestionsAnswersContainer.propTypes = {
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
  productId: PropTypes.string,
  productN: PropTypes.string,
};

QuestionsAnswersContainer.defaultProps = {
  questions: [],
};

export default QuestionsAnswersContainer;
