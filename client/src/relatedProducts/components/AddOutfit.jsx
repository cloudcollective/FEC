import React, { useState, useEffect, useRef } from 'react';
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
const AddOutfit = ({
  product, isFavorite, setFavorite, rating,
}) => {
  let productCard;
  const [outfitList, setOutfitList] = useState({});
  const [displayOutfits, setDisplayOutfits] = useState([]);
  // lets me grab previous values
  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevOutfit = usePrevious(outfitList);
  useEffect(() => {
    if (isFavorite) {
      prevOutfit[product.id] = productCard;
      setOutfitList(prevOutfit);
      const customOutfitsArray = Object.values(outfitList);
      setDisplayOutfits(customOutfitsArray);

    // eslint-disable-next-line max-len
    } else if (!(outfitList[product.id] === undefined)) {
      delete outfitList[product.id];
      const customOutfitsArray = Object.values(outfitList);
      setDisplayOutfits(customOutfitsArray);
    }
  }, [isFavorite]);

  if (product) {
    productCard = (
      <CardMaker
        product={product}
        key={product.id}
        buttonType="delete"
        rating={rating}
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
            setFavorite();
          }}
        >
          Add Outfit
        </button>
      </AddOutfitButton>
      <div>{displayOutfits}</div>
    </CustomOutfitContainer>
  );
};

export default AddOutfit;
