import React from 'react';

const ProductOverview = (props) => (
  <>
    <div className="sloganAndDescription">
      <div>
        <h2>{props.product.slogan}</h2>
      </div>
      <div>
        <p>{props.product.description}</p>
      </div>
    </div>
    <div className="features">
      <div>
        <div>{props.product.features[0].feature} : {props.product.features[0].value}</div>
      </div>
    </div>
  </>
);

export default ProductOverview;
