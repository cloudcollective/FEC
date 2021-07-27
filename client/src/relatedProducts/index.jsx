import React from 'react';
// import PropTypes from 'prop-types';
// 'prop-types' should be listed in the project's dependencies. Run 'npm i -S prop-types' to add it
import CardMaker from './components/CardMaker';

// refactor using hooks later
const RelatedProductsContainer = ({ products }) => {
  const relatedProductId = [1, 2, 3];
  return (
    <div className="rp-container">
      <div className="list-row-1">
        <h4>Related Products</h4>
        <div className="card-list"><CardMaker products={products} /></div>
      </div>
      <div className="list-row-2">
        <h4>Custom Outfits</h4>
        <div className="card-list">place</div>
      </div>
    </div>
  );
};
// RelatedProductsContainer.propTypes = {
//   products: PropTypes.object.isRequired,
// };

export default RelatedProductsContainer;
/* List of Changes:
1) All this work is being done in a separate branch
2) Created a components folder
3) Built out the skeleton of index.js
4) Changed class to classname, as per Reacts recommendation
5) Changed index.js to index.jsx due to:
JSX not allowed in files with extension '.js'
6) Uncommented out my Related Products Components in app.jsx
7) Wrapped app.jsx in a div tag. Commented out ProductDetails, and fixed all auto-correctable errors
8) Created CardMaker component.
8.5) What the heck are prop.types? Learned Destructuring.
*/
