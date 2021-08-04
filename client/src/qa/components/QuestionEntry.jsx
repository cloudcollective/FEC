import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helpful from './Helpful';
import AddAnswerBtn from './AddAnswerBtn';
import useToggle from './common/useToggle';
import AnswerModal from './AnswerModal';
import Divider from './Divider';

const QuestionEntry = ({
  productName, question, helpfulness, questionId,
}) => {
  const answerToggle = useToggle();

  return (
    <>
      <FirstCol><h4>Q: </h4></FirstCol>
      <SecondCol><h4>{question}</h4></SecondCol>
      <ThirdCol>
        <Row>
          <Helpful
            helpfulness={helpfulness}
            id={questionId}
          />
          <Divider />
          <AddAnswerBtn className="qa-meta" setIsVisible={answerToggle.toggle} />
          <AnswerModal
            productName={productName}
            question={question}
            isVisible={answerToggle.on}
            setIsVisible={answerToggle.toggle}
          />
        </Row>
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
`;

const Row = styled.div`
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
