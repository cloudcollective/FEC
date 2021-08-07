import React from 'react';
import styled from 'styled-components';

const OverviewBody = styled.div`
  display: grid;
  grid-template-columns: 65% 3% 28%;
  padding: 0 100px;
`;

const SloganAndDescription = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Divider = styled.div`
  border-left: 1px solid grey;
`;

const ProductFeatures = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: 20px;
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
      <Divider />
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
