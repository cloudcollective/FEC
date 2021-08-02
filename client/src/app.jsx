import React from 'react';
import axios from 'axios';
// import ProductDetails from './productDetails';
import RelatedProducts from './relatedProducts';
// import QuestionsAnswers from './qa';
// import ReviewsRatings from './rr';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedProduct: {},
      relatedProductIds: [],
      relatedProductData: [],
      questionsAndAnswersData: {},
    };

    this.getProductData = this.getProductData.bind(this);
    this.getQuestionData = this.getQuestionData.bind(this);
  }

  componentDidMount() {
    // example product_id = 25169
    this.getProductData('25169');
    this.getQuestionData('25169');
  }

  getProductData(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        this.setState({
          selectedProduct: data.data[0],
          relatedProductIds: data.data[2],
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
    axios.get(`/qa/questions/${id}`)
      .then((data) => {
        console.log(data, '1');
        console.log(data.data, '2');
        this.setState({
          questionsAndAnswersData: data,
        });
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  render() {
    const { selectedProduct, relatedProductData, questionsAndAnswersData } = this.state;
    console.log(questionsAndAnswersData, 'success?');
    return (
      <div>
        {/* <div>
          <ProductDetails />
        </div> */}
        <div>
          <RelatedProducts
            product={selectedProduct}
            products={relatedProductData}
          />
        </div>
        {/* <div>
         <QuestionsAnswers
           questions={data.questions}
           answers={data.answers}
         />
       </div> */}
        {/* <div>
         <ReviewsRatings />
         </div> */}
      </div>
    );
  }
}

export default App;
