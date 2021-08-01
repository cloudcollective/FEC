import React from 'react';
import ReviewListTile from './ReviewListTile.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div> 200 reviews sorted by relevance
      <div style={{display: "flex", flexDirection: "column", width: "45%"}}>
        {this.props.results.map((result, i) => <ReviewListTile result={result} index={i} />)}
      </div>
      </div>
    );
  }
}

export default ReviewList;