import React from 'react';
import CardMaker from './CardMaker.jsx';

const AddOutfit = ({ product }) => (
  <div className="custom-outfit-container">
    <div className="add-outfit-card">
      <button type="button" onClick={() => (CardMaker({ product }))}>Add Outfit</button>
    </div>
  </div>
);
// Question after they click on add outfit, will it create a card component inside of AddOutfit?
export default AddOutfit;
