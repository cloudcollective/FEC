import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsAnswersList from './QuestionsAnswersList';
import sampleData from '../../../../exampleProductData';

const { questions, answers } = sampleData;

test('It should render', () => {
  const { getByTestId } = render(
    <QuestionsAnswersList
      questions={questions}
      answers={answers}
    />
  );
  expect(getByTestId('qa-list')).toBeInTheDocument();
});
