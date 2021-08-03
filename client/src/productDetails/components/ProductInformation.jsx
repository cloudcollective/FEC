import React, { useState } from 'react';
import styled from 'styled-components';

const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

const SalePrice = styled.span`
  color: red;
  text-decoration: bold;
`;

const ProductInformation = ({ product, styles, styleId, styleIndex, styleSelected }) => {
  if (!product && !styles && !styleId && !styleIndex && !styleSelected) {
    return null;
  }

  let displayPrice;
  let styleName;
  if (styleSelected) {
    styleName = styles.results[styleIndex].name;
    if (styles.results[styleIndex].sale_price) {
      displayPrice = (
        <p className="price">
          <OriginalPrice>
            ${product.default_price}
          </OriginalPrice>
          <span>   </span>
          <SalePrice>
            ${styles.results[styleIndex].sale_price}
          </SalePrice>
        </p>
      );
    } else {
      displayPrice = (
        <p>
          $
          {product.default_price}
        </p>
      );
    }
  } else {
    displayPrice = (
      <p>
        $
        {product.default_price}
      </p>
    );
    styleName = styles.results[0].name;
  }

  return (
    <>
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
        {displayPrice}
      </div>
      <div>
        <p>
          STYLE: {styleName}
        </p>
      </div>
    </>
  );
};

export default ProductInformation;
