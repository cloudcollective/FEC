import React, { useState } from 'react';
// import ProductDetails from './productDetails';
import QuestionsAnswers from './qa';
// import RelatedProducts from './relatedProducts';
// import ReviewsRatings from './rr';

const app = ({ data }) => {
  // Default productId is 25172
  const [productId, setProductId] = useState('25172');

  return (
    <>
      {/* <ProductDetails product={data.product} productStyles={data.productStyles} /> */}
      {/* <RelatedProducts data={data} /> */}
      <QuestionsAnswers
        productId={productId}
        questions={data.questions}
        answers={data.answers}
      />
    </>
  );
};

export default app;
