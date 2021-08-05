import React, { useState } from 'react';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: grid;
`;

const SizeAndQuantity = styled.div`
  display: inline-block;
`;

const AddBagAndFavorite = styled.div`
  display: inline-block;
`;

const AddtoBagBtn = styled.button`
  transition-duration: 0.3s;
  width: 40%;
  float: left;
  margin: 0 10px;
  &:hover {
    font-weight: bold;
    color: #363636;
    border: 2px solid black;
  }
`;

const FavoriteBtn = styled.button`
  transition-duration: 0.3s;
  width: 40%;
  float: left;
  margin: 0 10px;
  &:hover {
    color: #DC2F2F;
    font-weight: bold;
    border: 2px solid black;
  }
`;

const SizeSelector = styled.div`
  width: 40%;
  float: left;
  padding: 10px;
`;

const QuantitySelector = styled.div`
  width: 40%;
  float: left;
  padding: 10px;
`;

const CustomSelector = styled.select`
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  margin: 0;
  width: 100%;
  line-height: 1.3;
  cursor: default;
  padding: 5px 10px 5px 8px;
  border: 1px solid #999;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='292.4' height='292.4'%3E%3Cpath fill='%23333' d='M287 69.4a17.6 17.6 0 0 0-13-5.4H18.4c-5 0-9.3 1.8-12.9 5.4A17.6 17.6 0 0 0 0 82.2c0 5 1.8 9.3 5.4 12.9l128 127.9c3.6 3.6 7.8 5.4 12.8 5.4s9.2-1.8 12.8-5.4L287 95c3.5-3.5 5.4-7.8 5.4-12.8 0-5-1.9-9.2-5.5-12.8z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 9px;
  color: #333;
  &:hover {
    border-color: #777;
  }
  &:focus {
    border-color: #999;
    box-shadow: 0 0 1px 2px #000408;
    outline: none;
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
          <SizeSelector>
            <CustomSelector name="size" id="size" onChange={sizeSelection}>
              <option value="default">SIZE</option>
              {/* set state for selected size and its index,  */}
              {size.map((size, index) => (
                <option value={size} key={index}>
                  {size}
                </option>
              ))}
            </CustomSelector>
          </SizeSelector>
          <QuantitySelector>
            <CustomSelector name="quantity" id="quantity" onChange={qtySelection}>
              <option value="default">QUANTITY</option>
              {qtyArray.map((qty, index) => (
                <option value={qty} key={index}>
                  {qty}
                </option>
              ))}
            </CustomSelector>
          </QuantitySelector>
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
