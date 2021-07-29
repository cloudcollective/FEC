import React from 'react';
import StarRatingBar from './StarRatingBar.jsx';
import { FaUser } from 'react-icons/fa';

const ReviewListTile = (props) => {
  console.log(props);
  let bkgrnd = "white";
  if (props.index % 2 === 0) {
    bkgrnd = "lightGrey"
  }
  return (

    <div className="tile" style={{ backgroundColor: `${bkgrnd}`, borderBottomWidth:5 }}>
      <div>
        <div style={{ align: "right", display: "inline-block" }}>
          <StarRatingBar rating={props.result.rating} />
        </div>
        <div style={{ align: "right", color: "black", fontFamily: "Courier New", fontSize: 15, display: "inline-block" }}>
          <FaUser /> {props.result.reviewer_name} @ {props.result.date.slice(0, 10)}
        </div>
      </div>
      <div style={{fontSize: 25}}><u>{props.result.summary}</u></div>
      <div><br />{props.result.body}</div>
      <div>helpful?</div>
    </div>
  )
};

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