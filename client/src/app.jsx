import React from 'react';
import axios from 'axios';
import ProductDetails from './productDetails';
import RelatedProducts from './relatedProducts';
import QuestionsAnswers from './qa';
import ReviewsRatings from './rr';
import Header from './productDetails/components/Header';
import './style.css';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      productId: '25169',
      selectedProduct: {},
      relatedProductIds: [],
      relatedProductData: [],
      reviewsData: [],
      metaReviewData: [],
      questionsAndAnswersData: {},
      selectedProductData: {},
      seansData: {},
    };

    this.getProductData = this.getProductData.bind(this);
    this.getQuestionData = this.getQuestionData.bind(this);
    this.getCurrentProductData = this.getCurrentProductData.bind(this);
  }

  componentDidMount() {
    // 25169, 25171
    const { productId } = this.state;
    this.getProductData(productId);
    this.getQuestionData(productId);
    this.getCurrentProductData(productId);
  }

  getProductData(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        this.setState({
          selectedProduct: data.data[0],
          relatedProductIds: data.data[2],
          reviewsData: data.data[3],
          metaReviewData: data.data[4],
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
        console.log('Error retrieving questions via product ID', error);
      });
  }

  render() {
    const {
      // eslint-disable-next-line max-len
      selectedProduct, relatedProductData, questionsAndAnswersData, reviewsData, metaReviewData, selectedProductData, seansData, productId,
    } = this.state;
    return (
      <main>
        <header>
          <Header />
        </header>
        <section>
          <ProductDetails selectedProduct={seansData} />
        </section>
        <div className="related-info">
          <section>
            <RelatedProducts
              product={selectedProductData}
              products={relatedProductData}
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
            <ReviewsRatings />
          </section>
        </div>
      </main>
    );
  }
}
export default App;
