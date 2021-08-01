import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import QuestionsAnswersList from './components/QuestionsAnswersList';
import SearchQuestions from './components/SearchQuestions';
import AddQuestionBtn from './components/AddQuestionBtn';
import QuestionModal from './components/QuestionModal';
import useToggle from './components/common/useToggle';

const QuestionsAnswersContainer = ({ productId }) => {
  const [productName, setProductName] = useState('');
  const [questions, setQuestions] = useState({});
  const { on, toggle } = useToggle(false);

  useEffect(() => {
    axios.get(`qa/questions?product_id=${productId}`)
      .then((data) => {
        setQuestions(data.data.results);
      })
      .catch((error) => {
        console.log('Error retrieving questions via product ID', error);
      });
  }, []);

  useEffect(() => {
    axios.get(`single/products/${productId}`)
      .then((data) => {
        setProductName(data.data.name);
      })
      .catch((error) => {
        console.log('Error retrieving Product name', error);
      });
  }, [productId]);

  return (
    <div>
      <h3>
        Questions &#38; Answers
      </h3>
      <SearchQuestions />
      <QuestionsAnswersList
        productName={productName}
        questions={questions}
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
  productId: PropTypes.string.isRequired,
};

export default QuestionsAnswersContainer;
