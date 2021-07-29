import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form from './Form';

test('should render a form to the page', () => {
  render(<Form />);
  expect(screen.getByRole('form')).toBeInTheDocument();
});

test('should render input typed by user', () => {
  render(<Form />);

  const questionInput = screen.getByLabelText('Your Question*');
  const nicknameInput = screen.getByLabelText('What is your nickname*');
  const emailInput = screen.getByLabelText('Your email*');

  userEvent.type(questionInput, 'I have a test question');
  expect(questionInput).toHaveValue('I have a test question');

  userEvent.type(nicknameInput, 'test user!');
  expect(nicknameInput).toHaveValue('test user!');

  userEvent.type(emailInput, 'test@test.com');
  expect(emailInput).toHaveValue('test@test.com');
});

test('should render an error message if question left blank', () => {
  render(<Form />);

  const nicknameInput = screen.getByLabelText('What is your nickname*');
  const emailInput = screen.getByLabelText('Your email*');

  userEvent.type(emailInput, 'test@test.com');
  userEvent.type(nicknameInput, 'test user!');
  userEvent.click(screen.getByText('Submit question'));

  expect(screen.getByText('Question: Question is required')).toBeInTheDocument();
});

test('should render an error message if email left blank', () => {
  render(<Form />);

  const questionInput = screen.getByLabelText('Your Question*');
  const nicknameInput = screen.getByLabelText('What is your nickname*');

  userEvent.type(questionInput, 'I have a test question');
  userEvent.type(nicknameInput, 'test user!');
  userEvent.click(screen.getByText('Submit question'));

  expect(screen.getByText('Email: Email is required')).toBeInTheDocument();
});

test('should render an error message if nickname left blank', () => {
  render(<Form />);

  const questionInput = screen.getByLabelText('Your Question*');
  const emailInput = screen.getByLabelText('Your email*');

  userEvent.type(questionInput, 'I have a test question');
  userEvent.type(emailInput, 'test@test.com');
  userEvent.click(screen.getByText('Submit question'));

  expect(screen.getByText('Nickname: Nickname is required')).toBeInTheDocument();
});

test('should clear input fields upon successful submission', () => {
  render(<Form />);

  const questionInput = screen.getByLabelText('Your Question*');
  const nicknameInput = screen.getByLabelText('What is your nickname*');
  const emailInput = screen.getByLabelText('Your email*');

  userEvent.type(questionInput, 'I have a test question');
  userEvent.type(emailInput, 'test@test.com');
  userEvent.type(nicknameInput, 'test user!');
  userEvent.click(screen.getByText('Submit question'));

  expect(questionInput).toHaveValue('');
  expect(nicknameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
