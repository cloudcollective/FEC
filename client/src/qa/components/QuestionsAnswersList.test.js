import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import QuestionsAnswersList from './QuestionsAnswersList';
import sampleData from '../../../../exampleProductData';

const { questions } = sampleData;

test('It should render', () => {
  const { getByTestId } = render(
    <QuestionsAnswersList
      questions={questions.results}
      productName="some fakey product"
    />,
  );
  expect(getByTestId('qa-list')).toBeInTheDocument();
});

test('It should render a button', () => {
  render(
    <QuestionsAnswersList
      questions={questions.results}
      productName="some fakey product"
    />,
  );
  expect(screen.getByText('See More Questions')).toBeInTheDocument();
});
