import React from 'react';
import styled from 'styled-components';

const OverviewBody = styled.div`
padding: 20px;
`;

const ProductOverview = ({ product }) => {
  if (!product) {
    return null;
  }

  return (
    <OverviewBody>
      <div className="sloganAndDescription">
        <div>
          <h1>{product.slogan}</h1>
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
