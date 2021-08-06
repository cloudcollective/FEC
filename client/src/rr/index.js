import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from './components/ReviewList';
import Overview from './components/Overview';

const Container = styled.div`
display: flex;
justify-content: flex-start;
${'' /* margin-left: 15%;
margin-right: 15%; */}
`;

const FullComponent = styled.div`
margin-top: 50px;
`;

// Todo - need to apply or not
const Title = styled.div`
text-align: center;
font-size: 2.5em;
margin-bottom: 30px;
`;

const Reviews = ({ reviews, rating }) => {
  const getAverageRating = (ratings) => {
    let total = 0;
    let numberOfRatings = 0;
    for (let i = 1; i <= 5; i += 1) {
      if (ratings[i]) {
        total += (parseInt(ratings[i]) * i);
        numberOfRatings += parseInt(ratings[i]);
      }
    }
    setNumberOfratings(numberOfRatings);
    const average = total / numberOfRatings;
    setAverage(average);
  };

  const [reviewsArray, setReviewsArray] = useState([]);
  const [ratings, setRatings] = useState({});
  const [numberOfRatings, setNumberOfratings] = useState(0);
  const [average, setAverage] = useState(0);

  useEffect(() => {
    setReviewsArray(reviews);
  }, [reviews]);

  useEffect(() => {
    setRatings(rating);
    getAverageRating(rating);
  }, [rating]);

  return (
    <FullComponent>
      <h3 className="widget-title">Ratings &#38; Reviews</h3>
      <Container>
        <Overview ratings={ratings} average={average} numberOfRatings={numberOfRatings} />
        <ReviewList results={reviewsArray} />
      </Container>
    </FullComponent>
  );
};
export default Reviews;
