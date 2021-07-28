import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRatingBar = ({ rating }) => (
  <div>
    {[...Array(5)].map((star, i) => {
      if (i < rating) {
        return (<FaStar size={20} color="GoldenRod" />);
      }
      return (<FaStar size={20} color="white" stroke='black' stroke-width={10} />);
    })}
  </div>
);

export default StarRatingBar;
