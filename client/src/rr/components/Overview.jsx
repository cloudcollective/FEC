import React from 'react';
import styled from 'styled-components';
import StarRatingBar from './StarRatingBar';

const AverageRating = styled.div`
  font-size: 50px;
`;

const Container = styled.div`
  text-align: center;
  margin-right: 50px;
  flex-grow: 2;
  min-width: 200px;
`;

const Meter = styled.meter`
`;
const arr = [5, 4, 3, 2, 1];

const Overview = ({ ratings, average, numberOfRatings }) => (

  <Container>
    <div>Average Rating</div>
    <StarRatingBar rating={average} />
    <AverageRating>{Math.round(average * 10) / 10}</AverageRating>
    {arr.map((num) => {
      if (ratings[num]) {
        return (
          <div key={num}>
          {num} Stars <Meter height="30px" value={ratings[num]} min={0} max={numberOfRatings} />
          </div>
        );
      }
      return (
        <div key={num}>
        {num} Stars <Meter value={0} min={0} max={numberOfRatings}  />
        </div>
      );
    })}
  </Container>

);

export default Overview;
