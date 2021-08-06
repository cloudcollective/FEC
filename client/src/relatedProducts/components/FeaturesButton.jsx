import React from 'react';
// import styled from 'styled-components';

const FeaturesButton = () => (
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

export default FeaturesButton;
