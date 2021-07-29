import React from 'react';

const CardMaker = ({ products, product }) => {
  // eslint-disable-next-line no-console
  console.log(product, 'This here are you temp. Products');
  return (
    <div className="card">
      <img src={`${product.thumbnail}`} alt="Product Img" />
      <div className="category">
        {`Category: ${product.category}`}
      </div>
      <div className="product-name">
        {`Product Name: ${product.name}`}
      </div>
      <div className="price">
        {`Price: $${product.default_price}`}
      </div>
      <div className="stars">
        ★★★★★
      </div>
    </div>
  );
};
export default CardMaker;
