import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

test('It should render a form to the page', () => {
  render(<Form />);
  expect(screen.getByRole('form')).toBeInTheDocument();
});
