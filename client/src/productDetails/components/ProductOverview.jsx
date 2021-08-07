import React from 'react';
import styled from 'styled-components';

const OverviewBody = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  padding: 0 100px;
`;

const SloganAndDescription = styled.div`
  justify-content: center;
  padding: 20px;
  border-right: 1px solid black;
`;

const ProductFeatures = styled.div`
  justify-content: center;
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
      <SloganAndDescription>
        <ProductSlogan>{product.slogan}</ProductSlogan>
        <h3>{product.description}</h3>
      </SloganAndDescription>
      <ProductFeatures>
        {product.features.map((description) => (
          <h4>
            {description.feature}
            {' '}
            -
            {' '}
            {description.value}
          </h4>
        ))}
      </ProductFeatures>
    </OverviewBody>
  );
};

export default ProductOverview;
