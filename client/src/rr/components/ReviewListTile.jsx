import React from 'react';
import StarRatingBar from './StarRatingBar.jsx';
import { FaUser } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const ReviewListTile = (props) => {
  console.log(props);
  let bkgrnd = "white";
  // if (props.index % 2 === 0) {
  //   bkgrnd = "lightGrey"
  // }
  return (

    <div className="tile" style={{ backgroundColor: `${bkgrnd}`, paddingBottom: "20px", paddingTop: "20px", borderBottom: "3px solid lightGrey" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <StarRatingBar rating={props.result.rating} />
        </div>
        <div style={{color: "black", fontFamily: "Courier New", fontSize: 15, display: "inline-block", marginBottom: "20px" }}>
          <FaUser /> {props.result.reviewer_name} @ {props.result.date.slice(0, 10)}
        </div>
      </div>
      {props.result.recommend === true && <div style={{ display: "inline-block", fontSize: 15, fontFamily: "Arial", border: "1px dotted black", margin: "10px", padding: "10px", backgroundColor: "HoneyDew"}}> <FaCheckCircle color="green" /> I recommend this product! </div>}
      <div style={{fontSize: 25, fontFamily: "Arial"}}> {props.result.summary}</div>
      <div style={{marginLeft: "20px"}}><div style={{fontFamily: "Arial"}}><br />{props.result.body}</div></div>
      <div style={{fontSize: 10, fontFamily: "Arial", color: "grey", margin: "20px"}}> Was this review helpful? <u>Yes (10)</u></div>
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