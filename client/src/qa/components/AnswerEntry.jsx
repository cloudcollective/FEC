import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnswererInfo from './AnswererInfo';
import PhotoModal from './PhotoModal';

const AnswerEntry = ({ answer, first }) => (
  <>
    <FirstCol>{first && <h4>A: </h4>}</FirstCol>
    <SecondCol>
      <p>{answer.body}</p>
    </SecondCol>
    {answer.photos
    && (
      <SecondCol>
        {answer.photos.map((photoUrl, index) => (
          <PhotoModal
            key={`${photoUrl}-${index}`}
            url={photoUrl}
            description={answer.body}
            index={index}
          />
        ))}
      </SecondCol>
    )}
    <SecondCol>
      <UserRow>
        <AnswererInfo
          className="user-info"
          answerId={answer.id}
          username={answer.answerer_name}
          date={answer.date}
          helpfulness={answer.helpfulness}
        />
      </UserRow>
    </SecondCol>
  </>
);

const FirstCol = styled.div`
  grid-column: 1 / span 1;
`;

const SecondCol = styled.div`
  grid-column: 2 / span 1;
`;

const UserRow = styled.div`
  display: flex;
  align-items: baseline;
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
