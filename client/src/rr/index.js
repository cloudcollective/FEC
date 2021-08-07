import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ReviewList from './components/ReviewList';
import Overview from './components/Overview';

const Container = styled.div`
display: flex;
justify-content: flex-start;
${'' /* margin-left: 15%;
margin-right: 15%; */}
`;

const FullComponent = styled.div`
margin-top: 50px;
`;

// Todo - need to apply or not
const Title = styled.div`
text-align: center;
font-size: 2.5em;
margin-bottom: 30px;
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
    this.reload = this.reload.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props;
    axios.get('/reviews/id', {
      params: {
        id: productId,
      },
    })
      .then(((res) => this.setState({ results: res.data.results })))
      .catch((err) => console.log (err, 'what reviews'));

    axios.get('/reviews/meta', {
      params: {
        id: productId,
      },
    })
      .then((res) => (this.setState({ meta: res.data }, () => {
        this.setState({ average: this.getAverageRating() });
      })))
      .catch((err) => (console.log('what metadata', err)));
  }

  getAverageRating() {
    const { meta } = this.state;
    const { method } = this.props;
    let total = 0;
    let numberOfRatings = 0;
    for (let i = 1; i <= 5; i++) {
      if (meta.ratings[i]) {
        total += (parseInt(meta.ratings[i]) * i);
        numberOfRatings += parseInt(meta.ratings[i]);
      }
    }
    this.setState({ numberOfRatings: numberOfRatings });
    const average = total / numberOfRatings;
    method(average);
    return average;
  }

  reload() {
    const { productId } = this.props;
    axios.get('/reviews/id', {
      params: {
        id: productId,
      },
    })
      .then(((res) => this.setState({ results: res.data.results })))
      .catch((err) => console.log (err, 'what reviews'));

    axios.get('/reviews/meta', {
      params: {
        id: productId,
      },
    })
      .then((res) => (this.setState({ meta: res.data }, () => {
        this.setState({ average: this.getAverageRating() });
      })))
      .catch((err) => (console.log('what metadata', err)));
  }

  render() {
    const {
      results, meta, average, numberOfRatings,
    } = this.state;
    const { productId } = this.props;
    if (results === null || meta === null) {
      return (
        <>
          loading
        </>
      );
    }
    return (
      <FullComponent>
        <h3 className="widget-title">Ratings &#38; Reviews</h3>
        <Container>
          <Overview
            ratings={meta.ratings}
            average={average}
            numberOfRatings={numberOfRatings}
          />
          <ReviewList reload={this.reload} productId={productId} results={results} />
        </Container>
      </FullComponent>
    );
  }
}

export default Reviews;
