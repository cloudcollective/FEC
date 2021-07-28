import React from 'react';
import StarRatingBar from './StarRatingBar.jsx';

const ReviewListTile = (props) => (

  <div>
    <div>{props.result.rating}</div>
    <div><StarRatingBar rating={props.result.rating} /></div>
    <div>{props.result.reviewer_name}</div>
    <div>{props.result.summary} <br /></div>
    <div>{props.result.body}</div>
    <div>helpful?</div>

  </div>
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