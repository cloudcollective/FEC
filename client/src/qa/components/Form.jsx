import React, { useState } from 'react';

const formGroup = {
  marginBottom: '1rem',
};

// taken from bootstrap
const formControl = {
  display: 'block',
  width: '100%',
  padding: '.375rem .75rem',
  fontSize: '1rem',
  lineHeight: '1.5',
  color: '#495057',
  backgroundColor: '#fff',
  border: '1px solid #ced4da',
  borderRadius: '.25rem',
};

const Form = () => {
  const [questionBody, setQuestionBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const clearState = () => {
    setQuestionBody('');
    setNickname('');
    setEmail('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(questionBody, nickname, email);
    clearState();
  };

  return (
    <form aria-label="form">

      <div className="formGroup" style={formGroup}>
        <label htmlFor="question">
          Your Question*
          <textarea
            style={formControl}
            id="question"
            rows="8"
            cols="40"
            maxLength="1000"
            value={questionBody}
            onChange={(e) => setQuestionBody(e.target.value)}
          />
        </label>
      </div>

      <div className="formGroup" style={formGroup}>
        <label htmlFor="nickname">
          What is your nickname*
          <input
            style={formControl}
            type="text"
            maxLength="60"
            placeholder="Example: jackson11!"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <p><small>For privacy reasons, do not use your full name or email address</small></p>
        </label>
      </div>

      <div className="formGroup" style={formGroup}>
        <label htmlFor="email">
          Your email*
          <input
            style={formControl}
            type="email"
            maxLength="60"
            placeholder="Example: jack@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p><small>For authentication reasons, you will not be emailed</small></p>
        </label>
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit question
      </button>

    </form>
  );
};

export default Form;
