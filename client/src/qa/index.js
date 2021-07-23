import React from 'react';
import QuestionsAnswersList from './components/QuestionsAnswersList';

const QuestionsAnswersContainer = ({ questions, answers }) => (
  <div>
      <p>
        This is the outside container for the QuestionsAnswersList
      </p>
      <QuestionsAnswersList

        questions={questions}
        answers={answers}
      />
  </div>
);

export default QuestionsAnswersContainer;
