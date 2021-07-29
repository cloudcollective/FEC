import React, { useState } from 'react';
import styled from 'styled-components';

// props.product
// props.styles

const ProductInformation = ({ product, styles }) => {
  const [currProduct, setCurrProduct] = useState(0);
  const [currStyle, setCurrStyle] = useState(0);

  if (!product && !styles) {
    return null;
  }

  return (
    <>
      {console.log(product)}
      {console.log(styles)}
      <div className="ratingAndReview">
        <p>
          {/* Need rating function */}
          <span>★★★★★</span>
          <span>
            {/* anchor tag to Reviews and Rating */}
            <a>Read all reviews</a>
          </span>
        </p>
      </div>
      <div className="displayCategory">
        <p>{product.category}</p>
      </div>
      <div className="displayName">
        <h1>{product.name}</h1>
      </div>
      <div className="displayPrice">
        <p>${product.default_price}</p>
      </div>
    </>
  )
};

export default ProductInformation;
