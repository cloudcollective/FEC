import React, { useState } from 'react';
import styled from 'styled-components';
import Input from './common/Input';
import TextareaInput from './common/TextareaInput';
import Button from './common/Button';

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

const WarningText = styled.div`
  color: red;
`;

// Helper functions
const capitalizeFirst = (string) => (string[0].toUpperCase() + string.slice(1));

const validateEmail = (email) => {
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  return pattern.test(email);
};

const validate = (inputFields) => {
  const errorsFound = {};
  const allInputs = Object.keys(inputFields);
  allInputs.forEach((inpt) => {
    if (inputFields[inpt].trim() === '') {
      errorsFound[inpt] = `${capitalizeFirst(inpt)} is required`;
    }
    if (inpt === 'email') {
      if (!validateEmail(inputFields[inpt])) {
        errorsFound[inpt] = `${capitalizeFirst(inpt)} is in the wrong format`;
      }
    }
  });
  return Object.keys(errorsFound).length === 0 ? null : errorsFound;
};

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
    setErrors(null);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsFound = validate(input);
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
