import React from 'react';

const ProductOverview = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <>
      <div className="sloganAndDescription">
        <div>
          <h2>{product.slogan}</h2>
        </div>
        <div>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="features">
        <div>
          <div>{product.features[0].feature} : {product.features[0].value}</div>
        </div>
      </div>
    </>
  );
};

export default ProductOverview;
