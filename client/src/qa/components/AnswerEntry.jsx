import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswererInfo from './AnswererInfo';
import Modal from './common/Modal';
import useToggle from './common/useToggle';

const AnswerEntry = ({ answer, first }) => {
  const photoToggle = useToggle();

  return (
  <>
    <FirstCol>{first && <h3>A: </h3>}</FirstCol>
    <SecondCol>
      <p>{answer.body}</p>
    </SecondCol>
    <SecondCol>
      <AnswererInfo
        answerId={answer.id}
        username={answer.answerer_name}
        date={answer.date}
        helpfulness={answer.helpfulness}
      />
    </SecondCol>
    {answer.photos
    &&
      (<SecondCol>
        {answer.photos.map((photoUrl) => (
          <>
          <Modal
            isVisible={photoToggle.on}
            setIsVisible={photoToggle.toggle}
          >
            <img style={{height: '200px'}} src={photoUrl}/>
          </Modal>
          <Thumbnail src={photoUrl} onClick={photoToggle.toggle}/>
          </>
        ))}

       </SecondCol>)}
  </>
  )
};

const FirstCol = styled.div`
  grid-column: 1 / span 1;
`;

const SecondCol = styled.div`
  grid-column: 2 / span 1;
`;

const Thumbnail = styled.img`
  ${'' /* object-fit: cover; */}
  max-width: 180px;
  max-height: 100px;
  cursor: pointer;
  margin: 5px;
  border: 2px solid black;
`;

AnswerEntry.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.number,
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
