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
      slicer={2}
      setDisplayMoreQuestions={jest.fn((bool) => !bool)}
    />,
  );
  expect(getByTestId('qa-list')).toBeInTheDocument();
});

test('Should display loading if no questions', () => {
  render(
    <QuestionsAnswersList
      questions={[]}
      productName="some fakey product"
      slicer={2}
      setDisplayMoreQuestions={jest.fn((bool) => !bool)}
    />,
  );
  expect(screen.getByText('Loading questions...')).toBeInTheDocument();
});
