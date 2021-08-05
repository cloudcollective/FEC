import React from 'react';
import styled from 'styled-components';
import CardMaker from './CardMaker.jsx';

const AddOutfitButton = styled.div`
border: solid 1px black;
height: 400px;
width: 300px;
display: inline-block;
margin-right: 15px;
`;

const AddOutfit = ({ product }) => {
  let customOutfits = [];
  return (
    <div className="custom-outfit-container">
      <AddOutfitButton>
        <button
          type="button"
          onClick={() => {
            const card = CardMaker({ product });
            // issue for now fix later
          }}
        >
          Add Outfit
        </button>
      </AddOutfitButton>
      <div>{customOutfits}</div>
    </div>
  );
};
// Question after they click on add outfit, will it create a card component inside of AddOutfit?
export default AddOutfit;
