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

const AddToCart = ({ styles, styleId, styleIndex, styleSelected, }) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQty, setSelectedQty] = useState(0);

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
          <button onClick={addToCart}>ADD TO BAG +</button>
        </div>
        <div className="btn_favorite btn">
          <button>★</button>
        </div>
      </AddBagAndFavorite>
    </CartContainer>
  );
};

export default AddToCart;
