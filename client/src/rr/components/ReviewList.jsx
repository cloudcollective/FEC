import React from 'react';
import ReviewListTile from './ReviewListTile.jsx';
import styled from 'styled-components';

const AddReviews = styled.div(props => ({
  display: props.display,
  border: '1px solid black',
  height: '3em',
  fontFamily: 'Arial',
  textAlign: 'center',
  verticalAlign: 'center',
}));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 600px;
  overflow-y: scroll;

`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 2,
      buttonDisplay: "block",
    };
    this.moreReview = this.moreReview.bind(this);
  }

  moreReview() {
    this.setState({showing: this.state.showing + 2 }, () => (console.log(this.state.showing)));
    if (this.state.showing >= this.props.results.length - 2) {
      this.setState({ buttonDisplay: "none" });
    }
  }

  render() {
    return (
      <div> 200 reviews sorted by relevance
      <Container>
        {this.props.results.map((result, i) => {
          if (i < this.state.showing) {
            return (
              <ReviewListTile result={result} key={i} showing={this.state.showing} />
            );
          }
          return null;
        })}
      </Container>
        <AddReviews display={this.state.buttonDisplay} onClick={this.moreReview}><br />More Reviews <br /></AddReviews>
      </div>
    );
  }
}

export default ReviewList;