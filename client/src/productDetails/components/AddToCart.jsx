import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SizeAndQuantity = styled.div`
  flex-directon: row;
`;

const AddBagAndFavorite = styled.div`
  flex-direction: row;
`;

const AddToCart = ({ styles, styleId, styleIndex, styleSelected }) => {
  if (!styles && !styleId && !styleIndex && !styleSelected) {
    return null;
  }


  let quantityAndSize;
  const size = [];
  const quantity = [];
  if (styleSelected) {
    quantityAndSize = styles.results[styleIndex].skus;
    for (const [sizeNum, qAndS] of Object.entries(quantityAndSize)) {
      size.push(qAndS.size);
      quantity.push(qAndS.quantity);
    }
  } else {
    quantityAndSize = styles.results[0].skus;
    for (const [sizeNum, qAndS] of Object.entries(quantityAndSize)) {
      size.push(qAndS.size);
      quantity.push(qAndS.quantity);
    }
  }

  return (
    <CartContainer>
      {console.log({ size, quantity })}
      <SizeAndQuantity>
        <form>
          <select name="size" id="size">
            <option value="default">SELECT SIZE</option>
            {/* set state for selected size and its index,  */}
            {size.map((size, index) => <option value={size} key={index}>{size}</option>)}
          </select>
        </form>
        <form>
          <select name="quantity" id="quantity">
            <option value="default">1</option>
            <option value="s">2</option>
            <option value="m">3</option>
            <option value="l">4</option>
          </select>
        </form>
      </SizeAndQuantity>
      <AddBagAndFavorite>
        <div className="btn_addToBag btn">
          <button>ADD TO BAG +</button>
        </div>
        <div className="btn_favorite btn">
          <button>★</button>
        </div>
      </AddBagAndFavorite>
    </CartContainer>
  );
};

export default AddToCart;
