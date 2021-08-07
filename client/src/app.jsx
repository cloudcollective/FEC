import React from 'react';
import axios from 'axios';
import ProductDetails from './productDetails';
import RelatedProducts from './relatedProducts';
import QuestionsAnswers from './qa';
import ReviewsRatings from './rr';
import Header from './productDetails/components/Header';
import noDupes from './relatedProducts/components/noDuplicates';
import './style.css';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      productId: '25171',
      relatedProductIds: [],
      relatedProductData: [],
      reviewsData: [],
      ratings: [],
      questionsAndAnswersData: {},
      selectedProductData: {},
      average: null,
      seansData: {},
      isFavorite: false,
    };

    this.getProductData = this.getProductData.bind(this);
    this.getQuestionData = this.getQuestionData.bind(this);
    this.getCurrentProductData = this.getCurrentProductData.bind(this);
    this.setFavorite = this.setFavorite.bind(this);
    this.fetchAverageRating = this.fetchAverageRating.bind(this);
    this.updateProductId = this.updateProductId.bind(this);
  }

  componentDidMount() {
    // 25169, 25171a
    const { productId } = this.state;
    this.getProductData(productId);
    this.getQuestionData(productId);
    this.getCurrentProductData(productId);
  }

  getProductData(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        const rpi = noDupes.noDuplicateIds(data.data[2]);
        this.setState({
          relatedProductIds: rpi,
          reviewsData: data.data[3].results,
          ratings: data.data[4].ratings,
          seansData: data.data,
        });
      })
      .then(() => {
        // Used in Related Products
        const { relatedProductIds } = this.state;
        let arrayOfPromises = [];
        arrayOfPromises = relatedProductIds.map((relatedId) => axios.get(`/related/${relatedId}`));
        Promise.all(arrayOfPromises).then((data) => {
          const temp = data.map((obj) => (
            obj.data
          ));
          this.setState({
            relatedProductData: temp,
          });
        }).catch((err) => {
          // eslint-disable-next-line no-console
          console.log(`Failed to fetch data from the server: ${err}`);
        });
      });
  }

  getQuestionData(id) {
    axios.get(('/qa/questions'), {
      params: {
        id,
      },
    })
      .then((data) => {
        this.setState({
          questionsAndAnswersData: data.data,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error retrieving questions via product ID', error);
      });
  }

  getCurrentProductData(id) {
    axios.get(`/related/${id}`)
      .then((data) => {
        this.setState({
          selectedProductData: data.data,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('Error retrieving questions via product ID', error);
      });
  }

  setFavorite() {
    const { isFavorite } = this.state;
    if (!isFavorite) {
      this.setState({
        isFavorite: true,
      });
    } else {
      this.setState({
        isFavorite: false,
      });
    }
  }

  fetchAverageRating(rating) {
    this.setState({ average: rating });
  }

  updateProductId(id) {
    this.setState({
      productId: id,
    });
    const { productId } = this.state;
    this.getProductData(productId);
    this.getQuestionData(productId);
    this.getCurrentProductData(productId);
  }

  render() {
    const {
      // eslint-disable-next-line max-len
      relatedProductData, questionsAndAnswersData, reviewsData, ratings, selectedProductData, seansData, productId, isFavorite, average,
    } = this.state;
    return (
      <main>
        <header>
          <Header />
        </header>
        <section>
          <ProductDetails
            selectedProduct={seansData}
            setFavorite={this.setFavorite}
<<<<<<< HEAD
            rating={average}
=======
            rating={this.state.average}
>>>>>>> main
          />
        </section>
        <div className="related-info">
          <section>
            <RelatedProducts
              product={selectedProductData}
              products={relatedProductData}
              ratings={ratings}
              setFavorite={this.setFavorite}
              isFavorite={isFavorite}
              resetId={this.updateProductId}
            />
          </section>
          <section>
            <QuestionsAnswers
              questions={questionsAndAnswersData.results}
              productId={productId}
              productN={selectedProductData.name}
            />
          </section>
          <section>
            <ReviewsRatings
              method={this.fetchAverageRating}
              reviews={reviewsData}
              rating={ratings}
            />
          </section>
        </div>
      </main>
    );
  }
}
export default App;
