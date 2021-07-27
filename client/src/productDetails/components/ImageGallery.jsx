import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
`;

const Thumbnails = styled.img`
  height: 92px;
  margin: 10px 0;
  cursor: pointer;
  display: block;
`;

const MainProduct = styled.div`

`;

// props.photos
// .results[0].photos
const ImageGallery = (props) => {
  const photos = props.photos.results[0].photos;
  return (
    <>
      <div>
        {photos.map((photo, index) => <Thumbnails src={photo.thumbnail_url} key={index} alt="thumbnails" />)}
      </div>
      <div>
        <img src={photos[0].url} alt="first product image" />
      </div>
    </>
  );
};

export default ImageGallery;
