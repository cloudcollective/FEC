import React from 'react';
import axios from 'axios';
// import ProductDetails from './productDetails';
import RelatedProducts from './relatedProducts';
// import QuestionsAnswers from './qa';
// import ReviewsRatings from './rr';

<<<<<<< HEAD
class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selectedProduct: {},
      relatedProductIds: [],
      relatedProductData: [],
    };
=======
// When we're want to refactor to hooks
// This will be the hooks version
// const [productId, setProductId] = useState('25172');

const app = ({ data }) => (
  <>
    <ProductDetails product={data.product} productStyles={data.productStyles} />
    {/* <RelatedProducts data={data} /> */}
    <QuestionsAnswers
      productId="25172"
      questions={data.questions}
      answers={data.answers}
    />
  </>
);
>>>>>>> main

    this.getProductData = this.getProductData.bind(this);
    this.getRelatedProductData = this.getProductData.bind(this);
  }

  componentDidMount() {
    // example product_id = 25167
    this.getProductData('25169');
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

  render() {
    const { selectedProduct, relatedProductData } = this.state;
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
      </div>
    );
  }
}

export default App;
