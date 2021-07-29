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
      relatedProductIDs: [],
      reviews: 'placeholder',
    };

    this.getProductData = this.getProductData.bind(this);
    this.getRelatedProductData = this.getProductData.bind(this);
  }

  componentDidMount() {
    // 25167
    this.getProductData('25167');
  }

  getProductData(id) {
    axios.get(`/products/${id}`)
      .then((data) => {
        this.setState({
          selectedProduct: data.data[0],
          relatedProductIds: data.data[2],
          // relatedProductIds: [...new Set(data.data[2])],
          reviews: data.data[3],
        });
      })
      // .then(() => {
      //   //
      // })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }

  render() {
    const { selectedProduct, relatedProductIds } = this.state;
    return (
      <div>
        {/* <ProductDetails data={data} /> */}
        <div>
          <RelatedProducts
            product={selectedProduct}
            products={relatedProductIds}
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
