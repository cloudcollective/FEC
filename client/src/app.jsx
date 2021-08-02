import React from 'react';
import ProductDetails from './productDetails';
import QuestionsAnswers from './qa';
// import RelatedProducts from './relatedProducts';
// import ReviewsRatings from './rr';

// When we're want to refactor to hooks
// This will be the hooks version
// const [productId, setProductId] = useState('25172');

const app = ({ data }) => (
  <>
    <ProductDetails product={data.product} productStyles={data.productStyles} />
    {/* <RelatedProducts data={data} /> */}
    <QuestionsAnswers
      productId="25168"
    />
  </>
);

export default app;
