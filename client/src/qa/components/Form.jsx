import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './common/Input';
import TextareaInput from './common/TextareaInput';
import Button from './common/Button';

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Form = () => {
  const defaultQuestionInfo = {
    question: '',
    nickname: '',
    email: '',
  };
  const [input, setInput] = useState(defaultQuestionInfo);
  const { question, nickname, email } = input;

  const [errors, setErrors] = useState(null);

  const clearState = () => {
    setInput((prevState) => ({
      ...prevState,
      ...defaultQuestionInfo,
    }));
  };

  const capitalizeFirst = (string) => (string[0].toUpperCase() + string.slice(1));

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const errorsFound = {};

    if (question.trim() === '') {
      errorsFound.question = 'Question is required';
    }
    if (nickname.trim() === '') {
      errorsFound.nickname = 'Nickname is required';
    }
    if (email.trim() === '') {
      errorsFound.email = 'Email is required';
    }
    return Object.keys(errorsFound).length === 0 ? null : errorsFound;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsFound = validate();
    setErrors(errorsFound);
    if (errorsFound) {
      return;
    }
    // do some api call
    clearState();
  };

  return (
    <form aria-label="form">
      <StyledFormGroup>
        <TextareaInput
          label="Your Question*"
          name="question"
          maxLength="1000"
          value={question}
          onChange={handleInput}
        />
      </StyledFormGroup>

      <StyledFormGroup>
        <Input
          name="nickname"
          label="What is your nickname*"
          placeholder="Example: jackson11!"
          maxLength="60"
          value={nickname}
          onChange={handleInput}
          afterInput="For privacy reasons, do not use your full name or email address"
        />
      </StyledFormGroup>

      <StyledFormGroup>
        <Input
          name="email"
          label="Your email*"
          placeholder="Example: jack@email.com"
          maxLength="60"
          value={email}
          onChange={handleInput}
          afterInput="For authentication reasons, you will not be emailed"
        />
      </StyledFormGroup>
      {errors
        && (
          <WarningText>
            <p>You must enter the following:</p>
            <ul>
              {Object.keys(errors).map((error) => <li key={error}>{`${capitalizeFirst(error)}: ${errors[error]}`}</li>)}
            </ul>
          </WarningText>
        )}
      <Button
        type="submit"
        label="Submit question"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default Form;

const WarningText = styled.div`
  color: red;
`;
