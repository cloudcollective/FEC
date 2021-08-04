import React from 'react';
import { FaStar } from 'react-icons/fa';
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
  background-image: linear-gradient(to right, white 35%, goldenrod 65%);
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
  <>
    {[...Array(5)].map((star, i) => {
      const num = i + 1;
      if (num <= rating) {
        return (<FullStar>★</FullStar>);
      } if (rating !== num && Math.ceil(rating) === num && (num - rating < 0.25)) {
        return (<QuarterStar>★</QuarterStar>);
      } if (rating !== num && Math.ceil(rating) === num && (num - rating < 0.5)) {
        return (<HalfStar>★</HalfStar>);
      } if (rating !== num && Math.ceil(rating) === num) {
        return (<ThreeQuarterStar>★</ThreeQuarterStar>);
      }
      return (<EmptyStar>★</EmptyStar>);
    })}
  </>
);

export default StarRatingBar;
