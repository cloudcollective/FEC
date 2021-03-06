import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';

test('should render', () => {
  render(<Modal isVisible setIsVisible={()=> {}}><div>Children!</div></Modal>);
  expect(screen.getByRole('dialog')).toBeInTheDocument();
});

test('should render a close button', () => {
  render(<Modal isVisible setIsVisible={()=> {}}><div>Children!</div></Modal>);
  expect(screen.getByLabelText('Close')).toBeInTheDocument();
});
