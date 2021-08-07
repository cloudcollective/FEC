import React from 'react';
import styled from 'styled-components';

const FullStar = styled.div`
  display: initial;
  font-size: 25px;
  color: goldenrod;
  -webkit-text-stroke: 1px black;
`;

const QuarterStar = styled.div`
  display: initial;
  font-size: 25px;
  background-image: linear-gradient(to left, white 65%, goldenrod 35%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px black;
`;

const HalfStar = styled.div`
  display: initial;
  font-size: 25px;
  background-image: linear-gradient(to left, white 50%, goldenrod 50%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px black;
`;

const ThreeQuarterStar = styled.div`
  display: initial;
  font-size: 25px;
  background-image: linear-gradient(to right, goldenrod 65%, white 35%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  -webkit-text-stroke: 1px black;
`;

const EmptyStar = styled.div`
  display: initial;
  font-size: 25px;
  color: transparent;
  -webkit-text-stroke: 1px black;
`;

const StarRatingBar = ({ rating }) => (
  <div>
    {[...Array(5)].map((star, i) => {
      const num = i + 1;

      if (num <= rating) {
        return (<FullStar key={i}>★</FullStar>);
      } if (rating !== num && Math.ceil(rating) === num && (num - rating > 0.75)) {
        return (<QuarterStar key={i}>★</QuarterStar>);
      } if (rating !== num && Math.ceil(rating) === num && (num - rating > 0.5)) {
        return (<HalfStar key={i}>★</HalfStar>);
      } if (rating !== num && Math.ceil(rating) === num) {
        return (<ThreeQuarterStar key={i}>★</ThreeQuarterStar>);
      }
      return (<EmptyStar key={i}>★</EmptyStar>);
    })}
  </div>
);

export default StarRatingBar;
