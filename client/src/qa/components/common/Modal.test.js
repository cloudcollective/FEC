import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

test('should render', () => {
  render(<Modal isVisible={true}/>);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('should render a close button', () => {
  render(<Modal isVisible={true}/>);
  expect(screen.getByText('Close')).toBeInTheDocument();
});
