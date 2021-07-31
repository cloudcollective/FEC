import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helpful from './Helpful';
import AddAnswerBtn from './AddAnswerBtn';
import useToggle from './common/useToggle';
import AnswerModal from './AnswerModal';

const QuestionEntry = ({ question, helpfulness, questionId }) => {
  const answerToggle = useToggle();

  return (
    <>
      <FirstCol><h3>Q: </h3></FirstCol>
      <SecondCol><h3>{question}</h3></SecondCol>
      <ThirdCol>
        <Helpful
          helpfulness={helpfulness}
          id={questionId}
        />
        {' | '}
        <AddAnswerBtn setIsVisible={answerToggle.toggle} />
        <AnswerModal
          isVisible={answerToggle.on}
          setIsVisible={answerToggle.toggle}
        />
      </ThirdCol>
    </>
  );
};

const FirstCol = styled.div`
  grid-column: 1 / span 1
`;

const SecondCol = styled.div`
  grid-column: 2 / span 1;
`;

const ThirdCol = styled.div`
  grid-column: 3 / span 1;
`;

QuestionEntry.propTypes = {
  question: PropTypes.string.isRequired,
  helpfulness: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
};

export default QuestionEntry;
