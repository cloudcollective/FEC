import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: grid;
`;

const SizeAndQuantity = styled.div`
  grid-template-columns: 30% 30%;
`;

const AddBagAndFavorite = styled.div`

`;

const AddtoBagBtn = styled.button`
  border: 1px solid black;
  background-color: #363636;
  color: #F8F8F8;
  cursor: pointer;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #F8F8F8;
    color: #363636;
    text-decoration: bold;
  }
`;

const FavoriteBtn = styled.button`
  border: 1px solid black;
  background-color: #363636;
  color: #F8F8F8;
  cursor: pointer;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  &:hover {
    background-color: #F8F8F8;
    color: #DC2F2F;
    text-decoration: bold;
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
        </form>
        <form>
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
        <div className="btn_addToBag btn">
          <AddtoBagBtn onClick={addToCart} type="submit">ADD TO BAG +</AddtoBagBtn>
        </div>
        <div className="btn_favorite btn">
          <FavoriteBtn onClick={() => saveFavorite} type="button">★</FavoriteBtn>
        </div>
      </AddBagAndFavorite>
    </CartContainer>
  );
};

export default AddToCart;
