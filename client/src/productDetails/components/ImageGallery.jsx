import React from 'react';

const ImageGallery = (props) => (
  <>
    <h1>This is Image Gallery</h1>
    <div>
      <img src={props.photos[1].url} alt="first product image" />
    </div>
  </>
);

export default ImageGallery;
