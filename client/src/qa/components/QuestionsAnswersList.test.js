import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsAnswersList from './QuestionsAnswersList';
import sampleData from '../../../../exampleProductData.js';

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
