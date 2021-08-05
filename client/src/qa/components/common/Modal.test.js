import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

test('should render', () => {
  render(<Modal isVisible setIsVisible={()=> {}} />);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('should render a close button', () => {
  render(<Modal isVisible setIsVisible={()=> {}} />);
  expect(screen.getByLabelText('Close')).toBeInTheDocument();
});
