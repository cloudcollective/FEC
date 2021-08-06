import React from 'react';
import axios from 'axios';
import ProductDetails from './productDetails';
import RelatedProducts from './relatedProducts';
import QuestionsAnswers from './qa';
import ReviewsRatings from './rr';
import './style.css';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      productId: '25171',
      selectedProduct: {},
      relatedProductIds: [],
      relatedProductData: [],
      reviewsData: [],
      metaReviewData: [],
      questionsAndAnswersData: {},
      selectedProductData: {},
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
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
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
  // const app = ({ data }) => (
  //   <>
  //     <ProductDetails product={data.product} productStyles={data.productStyles} />
  //     {/* <RelatedProducts data={data} /> */}
  //     {/* <QuestionsAnswers
  //     questions={data.questions}
  //     answers={data.answers}
  //   /> */}
  //   </>
  // );

  render() {
    const {
      // eslint-disable-next-line max-len
      selectedProduct, relatedProductData, questionsAndAnswersData, reviewsData, metaReviewData, selectedProductData,
    } = this.state;
    return (
      <div>
        <div>
          <ProductDetails />
        </div>
        <div>
          <RelatedProducts
            product={selectedProductData}
            products={relatedProductData}
          />
        </div>
        <div>
          <QuestionsAnswers
            questions={questionsAndAnswersData.results}
            productId={questionsAndAnswersData.product_id}
          />
        </div>
        <div>
         <ReviewsRatings />
         </div>
      </div>
    );
  }
}
// Warning, if there are render issues comment out lines 93 to 97 for now.
export default App;
