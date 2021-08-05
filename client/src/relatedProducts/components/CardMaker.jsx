import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
border: solid 1px black;
height: 360px;
width: 250px;
display: inline-block;
margin-right: 15px;
`;
const CardMaker = ({ product }) => {
  console.log(product, 'Here is a Product');
  return (
    <Card>
      <img src={`${product.url}`} onError={(e) => { e.target.onerror = null; e.target.src = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'; }} alt="default" width="200px" height="280px" />
      <div className="category">
        {`Category: ${product.category}`}
      </div>
      <div className="product-name">
        {`Product Name: ${product.name}`}
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
