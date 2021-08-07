import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CardMaker from './CardMaker';

const AddOutfitButton = styled.div`
border: solid 1px #A0A0A0;
height: 390px;
width: 250px;
display: inline-block;
margin-right: 15px;
`;
const CustomOutfitContainer = styled.div`
display: flex;
`;
const AddOutfit = ({ product, isFavorite, setFavorite }) => {
  const [productData, setProductData] = useState({});
  const [customOutfits, setCustomOutfits] = useState([]);
  const [addedOutfit, setAddedOutfit] = useState(false);
  useEffect(() => {
    setProductData(product);
  }, [product]);

  useEffect(() => {
    if (isFavorite) {
      setAddedOutfit(true);
      setCustomOutfits(productCard);
    } else if (addedOutfit === true) {
      console.log('error here 1?');
      setCustomOutfits(productCard);
      console.log('error here 2?');
    }
  }, [addedOutfit]);

  let productCard;
  if (product) {
    productCard = (
      <CardMaker
        product={product}
        key={product.id}
        buttonType="delete"
        isFavorite={isFavorite}
        setFavorite={setFavorite}
      />
    );
  }

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
      {/* <div>{customOutfits}</div> */}
      {productCard}
    </CustomOutfitContainer>
  );
};

export default AddOutfit;
