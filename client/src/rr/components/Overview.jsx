import React from 'react';
import StarRatingBar from './StarRatingBar.jsx';
import styled from 'styled-components';

const AverageRating = styled.div`
  font-size: 50px;
  font-family: Arial;
`;

const Container = styled.div`
  text-align: center;
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
          <div>
          {num} Stars <Meter height="30px" value={ratings[num]} min={0} max={numberOfRatings} />
          </div>
        );
      }
      return (
        <div>
        {num} Stars <Meter value={0} min={0} max={numberOfRatings} />
        </div>
      );
    })}
  </Container>

);

export default Overview;
