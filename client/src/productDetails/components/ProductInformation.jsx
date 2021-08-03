import React, { useState } from 'react';
import styled from 'styled-components';

const OriginalPrice = styled.span`
  text-decoration: line-through;
`;

const SalePrice = styled.span`
  color: #DC2F2F;
  text-decoration: bold;
`;

const ProductCategory = styled.div`

`;

const ProductName = styled.div`

`;

const ProductStyleName = styled.div`

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
      <ProductCategory>
        <h3>{product.category}</h3>
      </ProductCategory>
      <div className="displayName">
        <h1>{product.name}</h1>
      </div>
      <div className="displayPrice">
        <h2>{displayPrice}</h2>
      </div>
      <div>
        <h4>
          STYLE: {styleName}
        </h4>
      </div>
    </>
  );
};

export default ProductInformation;
