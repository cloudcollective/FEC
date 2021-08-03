import React from 'react';
import axios from 'axios';
import ProductDetails from './productDetails';
// import QuestionsAnswers from './qa';
// import RelatedProducts from './relatedProducts';
// import QuestionsAnswers from './qa';
// import ReviewsRatings from './rr';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedProduct: {},
      relatedProductIds: [],
      relatedProductData: [],
      reviewsData: [],
      metaReviewData: [],
      questionsAndAnswersData: {},
    };
    this.getProductData = this.getProductData.bind(this);
    // this.getQuestionData = this.getQuestionData.bind(this);
  }


  componentDidMount() {
    const productId = '25169';
    this.getProductData(productId);
    // this.getQuestionData(productId);
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
      selectedProduct, relatedProductData, questionsAndAnswersData, reviewsData, metaReviewData,
    } = this.state;
    // Delete these console.logs later
    // console.log(selectedProduct, 'Product Detail');
    // console.log(relatedProductData, 'Related Products');
    // console.log(questionsAndAnswersData, 'QA');
    // console.log(reviewsData, metaReviewData, 'Ratings and Reviews');
    return (
      <div>
        <div>
          <ProductDetails />
        </div>
        {/* <div>
          <RelatedProducts
            product={selectedProduct}
            products={relatedProductData}
          />
        </div> */}
        {/* <div>
          <QuestionsAnswers
            questions={questionsAndAnswersData}
          />
        </div> */}
        {/* <div>
         <ReviewsRatings />
         </div> */}
      </div>
    );
  }
}
// Warning, if there are render issues comment out lines 93 to 97 for now.
export default App;
