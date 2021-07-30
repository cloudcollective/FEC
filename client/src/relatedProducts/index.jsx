import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
// 'prop-types' should be listed in the project's dependencies. Run 'npm i -S prop-types' to add it
import CardMaker from './components/CardMaker';
import AddOutfit from './components/AddOutfit';
// refactor using hooks later

const RPContainer = styled.div`
border: solid 1px black;
`;
const CardList = styled.div`
border: solid 1px black;
padding: 10px;
margin: 0 0 0 5px;
`;
const RelatedProductsContainer = ({ product, products }) => {
  const arrayOfObj = products;
  // console.log(product, products, 'test')
  const renderElement = () => {
    if (products !== undefined) {
      return (<CardMaker product={product} />);
    }
  };
  return (
    <RPContainer>
      <div className="list-row-1">
        <h4><em>Related Products</em></h4>
        <CardList>
          {renderElement()}
        </CardList>
      </div>
      <div className="list-row-2">
        <h4><em>Custom Outfits</em></h4>
        <CardList>
          <AddOutfit product={product} />
        </CardList>
      </div>
    </RPContainer>
  );
};

// RelatedProductsContainer.propTypes = {
//   products: PropTypes.object.isRequired,
// };

export default RelatedProductsContainer;
/*
          <CardMaker product={arrayOfObj[0]} />
          <CardMaker product={arrayOfObj[1]} />
          <CardMaker product={arrayOfObj[2]} />
          <CardMaker product={arrayOfObj[3]} />
*/
