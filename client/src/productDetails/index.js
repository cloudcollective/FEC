import React from 'react';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ProductOverview from './components/ProductOverview';


const ProductDetails = (props) => (
  //
  <div>
    <div>
      <ImageGallery photos={props.productStyles.results[0].photos} />
    </div>

    <div>
      <ProductInformation product={props.product} styles={props.productStyles} />
      <StyleSelector styles={props.productStyles} />
      <AddToCart />
    </div>

    <div>
      <ProductOverview product={props.product} />
    </div>

    {console.log(props.product)}
    {console.log(props.productStyles)}
  </div>
);

export default ProductDetails;
