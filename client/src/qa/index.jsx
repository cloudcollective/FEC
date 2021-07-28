import React from 'react';
import QuestionsAnswersList from './components/QuestionsAnswersList';
import SearchQuestions from './components/SearchQuestions';
import AddQuestionBtn from './components/AddQuestionBtn';

const QuestionsAnswersContainer = ({ questions, answers }) => (
  <div style={divStyle}>
    <h3>
      Questions &#38; Answers
    </h3>
    <SearchQuestions />
    <QuestionsAnswersList
      questions={questions}
      answers={answers}
    />
    <AddQuestionBtn />
  </div>
);

const divStyle = {
  border: '1px solid blue',
};

export default QuestionsAnswersContainer;
