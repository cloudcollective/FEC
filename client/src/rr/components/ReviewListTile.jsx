import React from 'react';
import axios from 'axios';
import { FaUser, FaCheckCircle } from 'react-icons/fa';
import styled from 'styled-components';
import StarRatingBar from './StarRatingBar';

const Tile = styled.div`
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 3px solid lightGrey;
  ${'' /* width: 600px; */}
`;

const CornerContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Username = styled.div`
  font-size: .75em;
  display: inline-block;
  margin-bottom: 20px
`;

const RecommendBox = styled.div`
  display: inline-block;
  font-size: 1em;
  border: 1px dotted black;
  margin: 10px;
  padding: 10px;
  background-color: HoneyDew;
`;

const ReviewSummary = styled.div`
  font-size: 1.75em;

`;

const ReviewBody = styled.div`
  margin-left: 20px;
  max-width 90%;
`;

const Helpful = styled.div`
  font-size: .8em;
  color: #767676;
  margin: 20px;
`;

const ReviewListTile = ({ result, productId, reload }) => {
  const helpfulRequest = (id) => {
    axios.put(`/reviews/helpful/`, {
      params: {
        id: id,
      },
    })
      .then(reload())
      .catch((err) => console.log("hjnnknni", err));
  };

  return (
    <Tile>
      <CornerContent>
        <div>
          <StarRatingBar rating={result.rating} />
        </div>
        <Username>
          <FaUser /> {result.reviewer_name} @ {result.date.slice(0, 10)}
        </Username>
      </CornerContent>
      {result.recommend && (
        <RecommendBox>
          <FaCheckCircle color="green" />
          { ' I recommend this product!' }
        </RecommendBox>
        )}
      <ReviewSummary> {result.summary}</ReviewSummary>
      <ReviewBody><br />{result.body}</ReviewBody>
      <Helpful> Was this review helpful? <u ><div onClick={() => { console.log(result.review_id); helpfulRequest(result.review_id)}}>Yes ({result.helpfulness})</div></u></Helpful>
    </Tile>
  )
};

export default ReviewListTile;

