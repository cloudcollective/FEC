import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <input
      className="search-question"
      type="search"
      placeholder="Have a question? Search for Answers..."
      value={filter}
      onChange={changeAndFilter}
    />
  );
};

SearchQuestions.propTypes = {
  handleSearchQuestions: PropTypes.func.isRequired,
  doReset: PropTypes.func.isRequired,
};

export default SearchQuestions;
