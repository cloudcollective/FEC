import React, { useState, useEffect } from 'react';

const SearchQuestions = () => {
  const [filter, setFilter] = useState('');

  // if (filter.length >= 3) {
  //   //doFilter(filter)
  //   console.log('greater than 3 - start searching...');
  // }
  const changeAndFilter = (e) => {
    const text = e.target.value;
    setFilter(text);
    if (text.length >= 3) {
      //do other function searchandupdate here
      // console.log('this is the other way')
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

// const doFilter = (text) => {
//   //makeAPIcall or justsearches
//   //returns answers
// }

export default SearchQuestions;
