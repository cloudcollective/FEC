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
    </OverviewBody>
  );
};

export default ProductOverview;
