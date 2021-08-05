import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled from 'styled-components';
import Helpful from './Helpful';
import AddAnswerBtn from './AddAnswerBtn';
import useToggle from './common/useToggle';
import AnswerModal from './AnswerModal';
import Divider from './Divider';

const sendPutReqForHelpful = (questionId) => axios.put(`/qa/questions/${questionId}/helpful`);

const QuestionEntry = ({
  productName, question, helpfulness, questionId,
}) => {
  const answerToggle = useToggle();

  return (
    <>
      <FirstCol><h4>Q: </h4></FirstCol>
      <SecondCol><h4>{question}</h4></SecondCol>
      <ThirdCol>
        <Helpful
          helpfulness={helpfulness}
          id={questionId}
          handleHelpful={sendPutReqForHelpful}
        />
        <Divider />
        <AddAnswerBtn className="qa-meta" setIsVisible={answerToggle.toggle} />
        <AnswerModal
          questionId={questionId}
          productName={productName}
          question={question}
          isVisible={answerToggle.on}
          setIsVisible={answerToggle.toggle}
        />
      </ThirdCol>
    </>
  );
};

const FirstCol = styled.div`
  grid-column: 1 / span 1;
`;

const SecondCol = styled.div`
  grid-column: 2 / span 1;
`;

const ThirdCol = styled.div`
  grid-column: 3 / span 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: baseline;
`;

QuestionEntry.propTypes = {
  question: PropTypes.string.isRequired,
  helpfulness: PropTypes.number.isRequired,
  questionId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
};

export default QuestionEntry;
