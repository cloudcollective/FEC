import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QuestionsAnswersList from './components/QuestionsAnswersList';
import SearchQuestions from './components/SearchQuestions';
import AddQuestionBtn from './components/AddQuestionBtn';
import QuestionModal from './components/QuestionModal';
import useToggle from './components/common/useToggle';

const QuestionsAnswersContainer = ({ productId, questions }) => {
  const [productName, setProductName] = useState('');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [resetDisplay, setResetDisplay] = useState(false);
  const { on, toggle } = useToggle(false);

  useEffect(() => {
    if (questions) {
      setCurrentQuestions(questions);
    }
  }, [questions]);

  useEffect(() => {
    if (productId) {
      axios.get('qa/questions', {
        params: {
          id: productId,
        },
      })
        .then((data) => {
          setCurrentQuestions(data.data.results);
        })
        .catch((error) => {
          console.log('Error retrieving questions via product ID', error);
        });
    }
  }, [resetDisplay]);

  useEffect(() => {
    if (productId) {
      axios.get(`single/products/${productId}`)
        .then((data) => {
          setProductName(data.data.name);
        })
        .catch((error) => {
          console.log('Error retrieving Product name', error);
        });
    }
  }, [productId]);

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
    console.log('here are the results', results);
    setCurrentQuestions(results);
  };

  return (
    <div>
      <h3>
        Questions &#38; Answers
      </h3>
      <SearchQuestions
        handleSearchQuestions={handleSearchQuestions}
        doReset={setResetDisplay}
      />
      <QuestionsAnswersList
        productName={productName}
        questions={currentQuestions}
      />
      <AddQuestionBtn setIsVisible={toggle} />
      <QuestionModal
        productName={productName}
        isVisible={on}
        setIsVisible={toggle}
      />
    </div>
  );
};

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
};

export default QuestionsAnswersContainer;
