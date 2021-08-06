import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeaturesButton from './FeaturesButton';
import DeleteButton from './DeleteButton';

const Card = styled.div`
border: solid 1px black;
height: 370px;
width: 250px;
display: inline-block;
margin-right: 15px;
`;
const CardMaker = ({ product, buttonType, features }) => {
  const placeholderImage = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';

  return (
    <Card>
      <div>
        {buttonType === 'modal' && (<FeaturesButton />)}
        {buttonType === 'delete' && (<DeleteButton />)}
        <img src={`${product.url}`} onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} alt="default" width="200px" height="280px" />
      </div>
      <div className="category">
        {`Category: ${product.category}`}
      </div>
      <div className="product-name">
        {`Name: ${product.name}`}
      </div>
      <div className="price">
        {`Price: $${product.price}`}
      </div>
      <div className="stars">
        ★★★★★
      </div>
    </Card>
  );
};
export default CardMaker;
