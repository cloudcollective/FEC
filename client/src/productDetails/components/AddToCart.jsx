import React from 'react';
// import './AddToCart.css';

const AddToCart = () => (
  <>
    <div className="sizeSelector">
      <form>
        <select name="size" id="size">
          <option value="default">SELECT SIZE</option>
          <option value="s">Small</option>
          <option value="m">Medium</option>
          <option value="l">Large</option>
        </select>
      </form>
    </div>
    <div className="quantitySelector">
      <form>
        <select name="quantity" id="quantity">
          <option value="default">1</option>
          <option value="s">2</option>
          <option value="m">3</option>
          <option value="l">4</option>
        </select>
      </form>
    </div>
    <div className="btn_addToBag btn">
      <button>ADD TO BAG +</button>
    </div>
    <div className="btn_favorite btn">
      <button>★</button>
    </div>
  </>
);

export default AddToCart;
