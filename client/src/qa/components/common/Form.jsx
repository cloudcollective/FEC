import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from './Input';
import TextareaInput from './TextareaInput';

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

const WarningText = styled.div`
  p, ul li {
    color: #DC2F2F;
  }
`;

// Helper functions
export const capitalizeFirst = (string) => (string[0].toUpperCase() + string.slice(1));

export const validateEmail = (email) => {
  const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

  return pattern.test(email);
};

const Form = ({ formFields, buttonLabel, doSubmit }) => {
  // Extract field names from formFields object
  // Set to an empty string
  const defaultFields = {};
  formFields.textareas.forEach((textarea) => {
    defaultFields[textarea.name] = '';
  });

  formFields.inputs.forEach((inpt) => {
    defaultFields[inpt.name] = '';
  });

  const [input, setInput] = useState(defaultFields);
  const [errors, setErrors] = useState(null);

  const clearState = () => {
    setInput((prevState) => ({
      ...prevState,
      ...defaultFields,
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

  const validate = (inputFields) => {
    const errorsFound = {};
    const allInputs = Object.keys(inputFields);
    allInputs.forEach((inpt) => {
      if (inputFields[inpt].trim() === '') {
        errorsFound[inpt] = `${capitalizeFirst(inpt)} is required`;
      }
      if (inpt === 'email' && inputFields[inpt].trim() !== '') {
        if (!validateEmail(inputFields[inpt])) {
          errorsFound[inpt] = `${capitalizeFirst(inpt)} is in the wrong format`;
        }
      }
    });
    return Object.keys(errorsFound).length === 0 ? null : errorsFound;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorsFound = validate(input);
    setErrors(errorsFound);
    if (errorsFound) {
      return;
    }
    doSubmit();
    clearState();
  };

  return (
    <form aria-label="form">
      <StyledFormGroup>
        {formFields.textareas.map((textarea) => (
          <TextareaInput
            key={textarea.name}
            label={textarea.label}
            name={textarea.name}
            maxLength={textarea.maxLength}
            value={input[textarea.name]}
            onChange={handleInput}
          />
        ))}
      </StyledFormGroup>

      {formFields.inputs.map((inpt) => (
        <StyledFormGroup key={inpt.name}>
          <Input
            key={inpt.name}
            name={inpt.name}
            label={inpt.label}
            placeholder={inpt.placeholder}
            maxLength={inpt.maxLength}
            value={input[inpt.name]}
            onChange={handleInput}
            afterInput={inpt.afterInput}
          />
        </StyledFormGroup>
      ))}
      {errors
        && (
          <WarningText>
            <p>You must enter the following:</p>
            <ul>
              {Object.keys(errors).map((error) => <li key={error}>{`${capitalizeFirst(error)}: ${errors[error]}`}</li>)}
            </ul>
          </WarningText>
        )}
      <button
        type="submit"
        onClick={handleSubmit}
      >
        {buttonLabel}
      </button>
    </form>
  );
};

Form.propTypes = {
  formFields: PropTypes.shape({
    textareas: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      maxLength: PropTypes.string,
    })),
    inputs: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      label: PropTypes.string,
      placeholder: PropTypes.string,
      maxLength: PropTypes.string,
      afterInput: PropTypes.string,
    })),
  }).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  doSubmit: PropTypes.func.isRequired,
};

export default Form;
