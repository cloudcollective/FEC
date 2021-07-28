import React from 'react';
import ReviewListTile from './ReviewListTile.jsx'

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {},

  }

  render() {
    return (
      <div>
        {this.props.results.map((result, i) => <ReviewListTile result={result} key={i} />)}
      </div>
    )
  }
}