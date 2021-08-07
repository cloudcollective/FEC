import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardMaker from './components/CardMaker';
import AddOutfit from './components/AddOutfit';

const RPContainer = styled.div`
border: hidden 1px;
`;
const CardList = styled.div`
border: hidden 1px ;
padding: 10px;
margin: 0 0 0 5px;
display:flex;
`;

const RelatedProductsContainer = ({ product, products }) => {
  let arrayOfProductCards = [];
  const [relatedProductData, setrelatedProductData] = useState([]);
  const [productCards, setproductCards] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  // const [navCardList, setNavCardList] = useState([0, 5]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [leftButtonVisibility, setLeftButtonVisibility] = useState(false);
  const [rightButtonVisibility, setRightButtonVisibility] = useState(false);

  useEffect(() => {
    setrelatedProductData(products);
  }, [products]);

  useEffect(() => {
    setproductCards(arrayOfProductCards);
  }, [relatedProductData]);

  useEffect(() => {
    if (productCards.length === 0) {
      // decide whether you want to display a dummy card
    } else if (productCards.length <= 5) {
      setDisplayCards(productCards);
    } else {
      setDisplayCards(productCards.slice(start, end));
    }
  }, [productCards, start, end]);

  useEffect(() => {
    if (productCards.length > 5 && start !== 0) {
      setLeftButtonVisibility(true);
    } else {
      setLeftButtonVisibility(false);
    }
  }, [productCards, start]);

  useEffect(() => {
    if (productCards.length > 5 && end !== productCards.length) {
      setRightButtonVisibility(true);
    } else {
      setRightButtonVisibility(false);
    }
  }, [productCards, end]);

  arrayOfProductCards = relatedProductData.map((prod) => (
    <CardMaker
      product={prod}
      currentProduct={product}
      key={prod.id}
      buttonType="modal"
    />
  ));
  return (
    <RPContainer>
      <div className="list-row-1">
        <h4><em>Related Products</em></h4>
        <CardList>
          {leftButtonVisibility
          && (
          <button
            type="button"
            onClick={() => {
              setStart(((prevState) => prevState - 1));
              setEnd(((prevState) => prevState - 1));
            }}
          >
            &lt;
          </button>
          )}
          {displayCards}
          {rightButtonVisibility && (
          <button
            type="button"
            onClick={() => {
              setStart(((prevState) => prevState + 1));
              setEnd(((prevState) => prevState + 1));
            }}
          >
            &gt;
          </button>
          )}
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
//   product: PropTypes.shape,
//   products: PropTypes.arrayOf,
// };
export default RelatedProductsContainer;
/*
 note to self
 check for duplicate products!
  */
