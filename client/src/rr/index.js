import React from 'react';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

  results: [
    {
      "review_id": 5,
      "rating": 3,
      "summary": "I'm enjoying wearing these shades",
      "recommend": false,
      "response": null,
      "body": "Comfortable and practical.",
      "date": "2019-04-14T00:00:00.000Z",
      "reviewer_name": "shortandsweeet",
      "helpfulness": 5,
      "photos": [{
          "id": 1,
          "url": "urlplaceholder/review_5_photo_number_1.jpg"
        },
        {
          "id": 2,
          "url": "urlplaceholder/review_5_photo_number_2.jpg"
        },
      ]
    },
    {
      "review_id": 3,
      "rating": 4,
      "summary": "I am liking these glasses",
      "recommend": true,
      "response": "Glad you're enjoying the product!",
      "body": "They are very dark. But that's good because I'm in very sunny spots. blah blah blah more review stuff stuff isnt this cool, man i surely like reviews haha ok to tell the truth i made this review much longer than it actually was to demonstrate what a more full looking review body might look like on screen",
      "date": "2019-06-23T00:00:00.000Z",
      "reviewer_name": "bigbrotherbenjamin",
      "helpfulness": 5,
      "photos": [],
    },
  ],
}

    axios.get('/reviews/25171')
    .then((res => this.setState ( { reviews: res }, () => { console.log('reviews recieved and set on state', this.state.reviews ) } )))
    .catch((err) => console.log(err, 'what reviews'))




    axios.get('/nick/reviews/meta', {
      params: {
        id: 25171
      }
    })
    .then((res) => (this.setState( { meta: res }, () => { console.log("metadata received and set on state", this.state.meta) } )))
    .catch((err) => (console.log("what metadata", err)))
}



  render() {
    return (
    <div>
      <ReviewList results={this.state.results}/>
    </div>
    )
  }
}

export default Reviews;