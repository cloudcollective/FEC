import React from 'react';
import ReviewList from './components/ReviewList.jsx';
import axios from 'axios';
import Overview from './components/Overview.jsx';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
margin-left: 15%;
margin-right: 15%;
font-family: Arial;
`;


class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      results: null,
      meta: null,
      average: null,
      numberOfRatings: null,

    };
  }

  componentDidMount() {
    axios.get('/reviews/id', {
      params: {
        id: 25171,
      },
    })
      .then(((res) => this.setState({ results: res.data.results }, () => { console.log('reviews recieved and set on state', this.state.results ); })))
      .catch((err) => console.log(err, 'what reviews'));

    axios.get('/reviews/meta', {
      params: {
        id: 25171,
      },
    })
      .then((res) => (this.setState({ meta: res.data }, () => { console.log('metadata received and set on state', this.state.meta); this.setState({ average: this.getAverageRating() }, () => {console.log(this.state.average)}); })))
      .catch((err) => (console.log('what metadata', err)));
  }

  getAverageRating() {
    let total = 0;
    let numberOfRatings = 0;
    for (var i = 1; i <= 5; i++) {
      if(this.state.meta.ratings[i]) {
        total += (parseInt(this.state.meta.ratings[i]) * i);
        numberOfRatings += parseInt(this.state.meta.ratings[i]);
      }
    }
    this.setState({ numberOfRatings: numberOfRatings }, () => {console.log('number of ratings set to :' + this.state.numberOfRatings)});
    let average = total / numberOfRatings;
    return average;
  }

  render() {
    if (this.state.results === null || this.state.meta === null) {
      return (
      <>loading</>
      );
    }
    return (
      <Container>
        <Overview ratings={this.state.meta.ratings} average={this.state.average} numberOfRatings={this.state.numberOfRatings}/>
        <ReviewList results={this.state.results} />
      </Container>
    );
  }
}

export default Reviews;
