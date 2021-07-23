import React from 'react';
import AddToCart from './components/AddToCart.jsx';

const ProductDetails = (props) => (
  <div>
    <AddToCart />
    {console.log(props.product)}
    {console.log(props.productStyles)}
  </div>
);

export default ProductDetails;
