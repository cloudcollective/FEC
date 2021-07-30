import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import UserInfo from './UserInfo';

const AnswerEntry = ({ answer, first }) => (
  <>
    <FirstCol>{first && <h3>A: </h3>}</FirstCol>
    <p>{answer.body}</p>
    <SecondCol>
      <UserInfo
        username={answer.answerer_name}
        date={answer.date}
        helpfulness={answer.helpfulness}
      />
    </SecondCol>
  </>
);

const FirstCol = styled.div`
  grid-column: 1 / span 1
`;

const SecondCol = styled.div`
  grid-column: 2 / span 1;
`;

AnswerEntry.propTypes = {
  answer: PropTypes.shape({
    answer_id: PropTypes.number,
    body: PropTypes.string,
    date: PropTypes.string,
    answerer_name: PropTypes.string,
    helpfulness: PropTypes.number,
    photos: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  first: PropTypes.bool,
};

AnswerEntry.defaultProps = {
  first: true,
};

export default AnswerEntry;
