import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Form, { validateEmail, capitalizeFirst } from './Form';

const formFields = {
  textareas: [
    { name: 'question', label: 'Your Question*', maxLength: '1000' },
  ],
  inputs: [
    {
      name: 'nickname',
      label: 'What is your nickname*',
      placeholder: 'Example: jackson11!',
      maxLength: '60',
      afterInput: 'For privacy reasons, do not use your full name or email address',
    },
    {
      name: 'email',
      label: 'What is your email*',
      placeholder: 'Example: jack@email.com',
      maxLength: '60',
      afterInput: 'For authentication reasons, you will not be emailed',
    },
  ],
};

const handleSubmit = jest.fn(() => Promise.resolve());

beforeEach(() => {
  render(<Form
    formFields={formFields}
    buttonLabel="Submit question"
    doSubmit={handleSubmit}
  />);
});

test('should render a form to the page', () => {
  expect(screen.getByRole('form')).toBeInTheDocument();
});

test('should render input typed by user', () => {
  const questionInput = screen.getByLabelText('Your Question*');
  const nicknameInput = screen.getByLabelText('What is your nickname*');
  const emailInput = screen.getByLabelText('What is your email*');

  userEvent.type(questionInput, 'I have a test question');
  expect(questionInput).toHaveValue('I have a test question');

  userEvent.type(nicknameInput, 'test user!');
  expect(nicknameInput).toHaveValue('test user!');

  userEvent.type(emailInput, 'test@test.com');
  expect(emailInput).toHaveValue('test@test.com');
});

test('should render an error message if question left blank', () => {
  const nicknameInput = screen.getByLabelText('What is your nickname*');
  const emailInput = screen.getByLabelText('What is your email*');

  userEvent.type(emailInput, 'test@test.com');
  userEvent.type(nicknameInput, 'test user!');
  userEvent.click(screen.getByText('Submit question'));

  expect(screen.getByText('Question: Question is required')).toBeInTheDocument();
});

test('should render an error message if email left blank', () => {
  const questionInput = screen.getByLabelText('Your Question*');
  const nicknameInput = screen.getByLabelText('What is your nickname*');

  userEvent.type(questionInput, 'I have a test question');
  userEvent.type(nicknameInput, 'test user!');
  userEvent.click(screen.getByText('Submit question'));

  expect(screen.getByText('Email: Email is required')).toBeInTheDocument();
});

test('should render an error message if nickname left blank', () => {
  const questionInput = screen.getByLabelText('Your Question*');
  const emailInput = screen.getByLabelText('What is your email*');

  userEvent.type(questionInput, 'I have a test question');
  userEvent.type(emailInput, 'test@test.com');
  userEvent.click(screen.getByText('Submit question'));

  expect(screen.getByText('Nickname: Nickname is required')).toBeInTheDocument();
});

test('should clear input fields upon successful submission', () => {
  const questionInput = screen.getByLabelText('Your Question*');
  const nicknameInput = screen.getByLabelText('What is your nickname*');
  const emailInput = screen.getByLabelText('What is your email*');

  userEvent.type(questionInput, 'I have a test question');
  userEvent.type(emailInput, 'test@test.com');
  userEvent.type(nicknameInput, 'test user!');
  userEvent.click(screen.getByText('Submit question'));

  expect(questionInput).toHaveValue('');
  expect(nicknameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});

test('should return false for an improperly formatted email', () => {
  var result1 = validateEmail('test@te.x');
  var result2 = validateEmail('aw48@@com')
  expect(result1).toBe(false);
  expect(result2).toBe(false);
});

test('should return true for an improperly formatted email', () => {
  var result1 = validateEmail('test@test.com');
  var result2 = validateEmail('julie@harvard.edu')
  expect(result1).toBe(true);
  expect(result2).toBe(true);
});

test('should capitalize first letter of a word only', () => {
  var result1 = capitalizeFirst('aABBbb');
  var result2 = capitalizeFirst('qwerty')
  var result3 = capitalizeFirst('ABC')
  expect(result1).toBe('AABBbb');
  expect(result2).toBe('Qwerty');
  expect(result3).toBe('ABC');
});
