import React from 'react';
import ProductDetails from './productDetails';
// import QuestionsAnswers from './qa';
// import RelatedProducts from './relatedProducts';
// import ReviewsRatings from './rr';

const app = ({ data }) => (
  <ProductDetails product={data.product} productStyles={data.productStyles} />
  // <RelatedProducts data={data} />
  // <QuestionsAnswers
  //   questions={data.questions}
  //   answers={data.answers}
  // />
);

export default app;
