import React from 'react';
import { render, screen } from '@testing-library/react/';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import SearchQuestions from './SearchQuestions';

beforeEach(() => {
  render(
    <SearchQuestions
      handleSearchQuestions={()=>{}}
      doReset={()=>{}}
    />);
});

test('renders searchInput of type search', () => {
  const searchBox = screen.getByRole('searchbox');
  expect(searchBox).toBeInTheDocument();
  expect(searchBox).toHaveValue('');
});

test('renders text typed by user', () => {
  const searchBox = screen.getByRole('searchbox');
  userEvent.type(searchBox, 'hello OGB!');
  expect(searchBox).toHaveValue('hello OGB!');
});
