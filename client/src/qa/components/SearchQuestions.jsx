import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchQuestions = ({ handleSearchQuestions, doReset }) => {
  const [filter, setFilter] = useState('');

  const changeAndFilter = (e) => {
    const text = e.target.value;
    setFilter(text);
    if (text.length >= 3) {
      handleSearchQuestions(text);
    }
    if (text === '') {
      doReset(true);
    }
  };

  return (
    <StyledInput
      className="search-question"
      type="search"
      placeholder="Have a question? Search for Answers..."
      value={filter}
      onChange={changeAndFilter}
    />
  );
};

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 2;
  color: #272727;
  background-color: #fff;
  border: 1px solid #767676;
  &:focus {
    outline: none;
    border: 1px solid #272727;
  }
`;

SearchQuestions.propTypes = {
  handleSearchQuestions: PropTypes.func.isRequired,
  doReset: PropTypes.func.isRequired,
};

export default SearchQuestions;
