import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const SearchQuestions = ({ handleSearchQuestions, doReset }) => {
  const [filter, setFilter] = useState('');
  const [focus, setFocus] = useState(false);

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

  const handleOnFocus = () => {
    setFocus(true);
  };

  const handleOnBlur = () => {
    setFocus(false);
  };

  return (
    <SearchBox
      focus={focus}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <StyledInput
        className="search-question"
        type="search"
        placeholder="Have a question? Search for Answers..."
        value={filter}
        onChange={changeAndFilter}
      />
      <SearchIconBox>
        <FaSearch />
      </SearchIconBox>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  display: flex;
  justify: flex-start;
  align-items: center;
  border: ${(props) => (props.focus ? '1px solid #272727' : '1px solid #767676')};
  box-shadow: ${(props) => (props.focus ? '2px 2px 8px rgba(0, 0, 0, 0.3)' : 'none')};
  width: 100%;
  font-size: 1rem;
  line-height: 2;
  background-color: #fff;
  padding: 0;
`;

const SearchIconBox = styled.div`
  flex-grow: 1;
  text-align: center;
  padding-top: 1px;
`;

const StyledInput = styled.input`
  flex-grow: 15;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 2;
  color: #272727;
  background-color: #fff;
  border: none;
  &:focus {
    outline: none;
  }
`;

SearchQuestions.propTypes = {
  handleSearchQuestions: PropTypes.func.isRequired,
  doReset: PropTypes.func.isRequired,
};

export default SearchQuestions;
