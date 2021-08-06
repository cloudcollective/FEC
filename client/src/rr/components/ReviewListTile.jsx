import React from 'react';
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
`;

const Helpful = styled.div`
  font-size: .8em;
  color: #767676;
  margin: 20px;
`;

const ReviewListTile = (props) => (
  <Tile>
    <CornerContent>
      <div>
        <StarRatingBar rating={props.result.rating} />
      </div>
      <Username>
        <FaUser /> {props.result.reviewer_name} @ {props.result.date.slice(0, 10)}
      </Username>
    </CornerContent>
    {props.result.recommend &&
      (
      <RecommendBox>
        <FaCheckCircle color="red" />
        { ' I recommend this product!' }
      </RecommendBox>
      )}
    <ReviewSummary> {props.result.summary}</ReviewSummary>
    <ReviewBody><br />{props.result.body}</ReviewBody>
    <Helpful> Was this review helpful? <u>Yes (10)</u></Helpful>
  </Tile>
);

export default ReviewListTile;

// {
//   "review_id": 407324,
//   "rating": 5,
//   "summary": "tips for FEC",
//   "recommend": true,
//   "response": null,
//   "body": "use hooks, maybe redux, before all that make sure you know how git workflow works. Good luck!!!!",
//   "date": "2021-06-20T00:00:00.000Z",
//   "reviewer_name": "friendly Yuki",
//   "helpfulness": 3,
//   "photos": []
// }


