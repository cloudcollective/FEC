import React from 'react';

// styles
const StyleSelector = (props) => (
  <>
    <div>
      <p>STYLE > {props.styles.results[0].name}</p>
    </div>
    <div>
      <img src={props.styles.results[0].photos[0].thumbnail_url} />
    </div>
  </>
);

export default StyleSelector;
