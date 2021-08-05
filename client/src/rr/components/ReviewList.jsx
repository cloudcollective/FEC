import React from 'react';
import ReviewListTile from './ReviewListTile.jsx';
import styled from 'styled-components';
import Modal from './ModalWindow.jsx';

const MoreReviews = styled.div(props => ({
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

const AddReview = styled.div`
  display: block;
  border: 1px solid black;
  height: 3em;
  font-family: Arial;
  text-align: center;
  vertical-align: center;
  z-index: 1000;
  margin-bottom: 20px;
  margin-top: 10px;
`;

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: 2,
      buttonDisplay: "block",
      open: false,
    };
    this.moreReview = this.moreReview.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  moreReview() {
    this.setState({showing: this.state.showing + 2 }, () => (console.log(this.state.showing)));
    if (this.state.showing >= this.props.results.length - 2) {
      this.setState({ buttonDisplay: "none" });
    }
  }

  onOpen() {
    this.setState({open: true});
  }

  onClose() {
    this.setState({open: false}, () => {console.log(this.state.open)});
  }

  render() {
    return (
      <div>
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
        <MoreReviews display={this.state.buttonDisplay} onClick={this.moreReview}>
          <br />
          More Reviews
          <br />
        </MoreReviews>
        <AddReview onClick={this.onOpen}>
          <br />
          Add A Review
          <br />
        </AddReview>
        <Modal open={this.state.open} close={this.onClose} />
      </div>
    );
  }
}

export default ReviewList;
