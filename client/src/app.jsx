import React from 'react';
// import ProductDetails from './productDetails';
import QuestionsAnswers from './qa';
import RelatedProducts from './relatedProducts';
// import ReviewsRatings from './rr';

const app = ({ data }) => (
  <div>
    {/* <ProductDetails data={data} /> */}
    <div>
      <RelatedProducts products={data} />
    </div>
    <div>
      <QuestionsAnswers
        questions={data.questions}
        answers={data.answers}
      />
    </div>
  </div>
);

export default app;
