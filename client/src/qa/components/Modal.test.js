import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

test('It should render', () => {
  render(<Modal />);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});
