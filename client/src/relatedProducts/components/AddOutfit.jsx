import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardMaker from './CardMaker';

const AddOutfitButton = styled.div`
border: solid 1px black;
height: 360px;
width: 250px;
display: inline-block;
margin-right: 15px;
`;
const CustomOutfitContainer = styled.div`
display: flex;
`;
const AddOutfit = ({ product }) => {
  const [productData, setProductData] = useState({});
  const [customOutfits, setCustomOutfits] = useState([]);
  const [addedOutfit, setAddedOutfit] = useState(false);
  useEffect(() => {
    setProductData(product);
  }, [product]);

  useEffect(() => {
    if (addedOutfit === true) {
      setCustomOutfits(productCard);
    }
  }, [addedOutfit]);

  const productCard = ((prod) => (
    <CardMaker
      product={prod}
      key={prod.id}
      buttonType="delete"
    />
  ))(productData);

  return (
    <CustomOutfitContainer>
      <AddOutfitButton>
        <button
          type="button"
          onClick={() => {
            setAddedOutfit(true);
          }}
        >
          Add Outfit
        </button>
      </AddOutfitButton>
      <div>{customOutfits}</div>
    </CustomOutfitContainer>
  );
};
// Question after they click on add outfit, will it create a card component inside of AddOutfit?
export default AddOutfit;
