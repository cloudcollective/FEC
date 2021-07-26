import React from 'react';

// props.product
// props.styles

const ProductInformation = (props) => (
  <>
    <div className="ratingAndReview">
      <p>
        <span>★★★★★</span>
        <span>
          <a>Read all reviews</a>
        </span>
      </p>
    </div>
    <div className="displayCategory">
      <p>{props.product.category}</p>
    </div>
    <div className="displayName">
      <h1>{props.product.name}</h1>
    </div>
    <div className="displayPrice">
      <p>${props.product.default_price}</p>
    </div>
  </>
);

export default ProductInformation;
