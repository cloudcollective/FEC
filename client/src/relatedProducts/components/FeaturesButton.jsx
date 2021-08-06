import React from 'react';

const FeaturesButton = () => {
  const ten = 10;
  return (
    <>
      {/* <button className="buttontype" type="button">★</button> */}
      <div
        className="buttontype"
        role="button"
        onKeyUp={() => { console.log('secretMessage'); }}
        onClick={() => { console.log('hi'); }}
        tabIndex={0}
      >
        ★
      </div>
    </>
  );
};

export default FeaturesButton;
