import React, { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: grid;
  grid-template-rows: 30% 30%;
`;

const SizeAndQuantity = styled.div`
  display: inline-block;
`;

const AddBagAndFavorite = styled.div`
  display: inline-block;
`;

const AddtoBagBtn = styled.button`
  transition-duration: 0.4s;
  &:hover {
    font-weight: bold;
    color: #363636;
  }
`;

const FavoriteBtn = styled.button`
  transition-durtaion: 0.4s;
  &:hover {
    color: #DC2F2F;
    font-weight: bold;
  }
`;

const AddToCart = ({ styles, styleId, styleIndex, styleSelected, }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(0);

  if (!styles && !styleId && !styleIndex && !styleSelected) {
    return null;
  }

  let quantityAndSize;
  const size = [];
  const quantity = [];


  // let sizeAndQuantityObj = Object.entries(quantityAndSize);
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

  const sizeSelection = (event) => {
    setSelectedSize(event.target.value);
  };

  const qtySelection = (event) => {
    setSelectedQty(event.target.value);
  };

  const addToCart = () => {
    // Adding to Cart: productName: , productId: , productStyle: , productStyleId: , price: ,
    console.log(`size: ${selectedSize}, quantity: ${selectedQty}`);
  };

  const qtyArray = [];
  if (selectedSize) {
    let qtyIndex = size.indexOf(selectedSize);
    if (qtyIndex >= 0) {
      const selectedSizeQty = quantity[qtyIndex];
      if (selectedSizeQty <= 15 && selectedSizeQty > 0) {
        for (let i = 1; i <= selectedSizeQty; i += 1) {
          qtyArray.push(i);
        }
      } else if (selectedSizeQty > 15) {
        for (let i = 1; i <= 15; i += 1) {
          qtyArray.push(i);
        }
      }
    }
  }

  const saveFavorite = () => {
    console.log(`saving productId ____ as favorite`);
  };

  return (
    <CartContainer>
      <SizeAndQuantity>
        <form>
          <select name="size" id="size" onChange={sizeSelection}>
            <option value="default">SELECT SIZE</option>
            {/* set state for selected size and its index,  */}
            {size.map((size, index) => (
              <option value={size} key={index}>
                {size}
              </option>
            ))}
          </select>
          <select name="quantity" id="quantity" onChange={qtySelection}>
            <option value="default">SELECT QUANTITY</option>
            {qtyArray.map((qty, index) => (
              <option value={qty} key={index}>
                {qty}
              </option>
            ))}
          </select>
        </form>
      </SizeAndQuantity>
      <AddBagAndFavorite>
        <AddtoBagBtn onClick={addToCart} type="submit">ADD TO BAG +</AddtoBagBtn>
        <FavoriteBtn onClick={() => saveFavorite} type="button">★</FavoriteBtn>
      </AddBagAndFavorite>
    </CartContainer>
  );
};

export default AddToCart;
