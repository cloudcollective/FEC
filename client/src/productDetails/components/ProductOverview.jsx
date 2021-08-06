import React from 'react';
import styled from 'styled-components';

const OverviewBody = styled.div`
  padding: 20px;
`;

const ProductSlogan = styled.h1`
  text-transform: uppercase;
`;

const ProductOverview = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <OverviewBody>
      <div className="sloganAndDescription">
        <div>
          <ProductSlogan>{product.slogan}</ProductSlogan>
        </div>
        <div>
          <h3>{product.description}</h3>
        </div>
      </div>
      <div className="features">
        <div>
          <p>{product.features[0].feature} : {product.features[0].value}</p>
        </div>
      </div>
    </OverviewBody>
  );
};

export default ProductOverview;
