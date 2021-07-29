import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatingBar = ({ rating }) => (
  <div>
    {[...Array(5)].map((star, i) => {
      if (i < rating) {
        return (<FaStar size={20} color="GoldenRod" stroke='black' strokeWidth={25} />);
      }
      return (<FaStar size={20} color="white" stroke='black' strokeWidth={25} />);
    })}
  </div>
);

export default StarRatingBar;
