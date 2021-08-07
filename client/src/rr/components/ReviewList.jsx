import React from 'react';
import ReviewListTile from './ReviewListTile.jsx';
import styled from 'styled-components';
import Modal from './ModalWindow.jsx';

const MoreReviews = styled.div(({ display }) => ({
  display: display,
  border: '1px solid black',
  height: '3em',
  textAlign: 'center',
  verticalAlign: 'center',
}));

// Change to TileContainer and make a separate Container for flex-grow: 2
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  overflow-y: scroll;
`;

const AddReview = styled.div`
  display: block;
  border: 1px solid black;
  height: 3em;
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
      buttonDisplay: 'block',
      open: false,
    };
    this.moreReview = this.moreReview.bind(this);
    this.onOpen = this.onOpen.bind(this);
    this.onClose = this.onClose.bind(this);
    console.log(this.props);
  }

  onOpen() {
    this.setState({ open: true });
  }

  onClose() {
    this.setState({ open: false });
  }

  moreReview() {
    const { showing } = this.state;
    const { results } = this.props;
    this.setState( { showing: showing + 2 });
    if (showing >= results.length - 2) {
      this.setState({ buttonDisplay: 'none' }, () => console.log(this.state.buttonDisplay));
    }
  }


  render() {
    const { results } = this.props;
    const { showing, buttonDisplay, open } = this.state;
    console.log(results);
    return (
      <div style={{ flexGrow: '4' }}>
      <Container>
        {results.map((result, i) => {
          if (i < showing) {
            return (
              <ReviewListTile result={result} key={i} showing={this.showing} />
            );
          }
          return null;
        })}
      </Container>
        <MoreReviews display={buttonDisplay} onClick={this.moreReview}>
          <br />
          More Reviews
          <br />
        </MoreReviews>
        <AddReview onClick={this.onOpen}>
          <br />
          Add A Review
          <br />
        </AddReview>
        <Modal open={this.open} close={this.onClose} />
      </div>
    );
  }
}

export default ReviewList;
