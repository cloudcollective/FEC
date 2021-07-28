import React, { useEffect, useState } from 'react';
// import { useState } from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThumbContainer = styled.div`
  flex-direction: column;
`;

const Thumbnails = styled.img`
  height: 92px;
  margin: 10px 0;
  cursor: pointer;
  display: block;
`;

const MainImageContainer = styled.div`
  border: 1px solid black;
`;

const MainImage = styled.img`
  justify-content: center;
  max-height: 800px;
  max-width: 800px;
  cursor: pointer;
`;

const ImageGallery = (props) => {
  const photos = props.photos.results[0].photos;

  return (
    <Gallery>
      <ThumbContainer>
        {photos.map((photo, index) => <Thumbnails src={photo.thumbnail_url} key={index} alt="thumbnails" />)}
      </ThumbContainer>
      <MainImageContainer>
        <MainImage src={photos[0].url} alt="first product image" />
      </MainImageContainer>
    </Gallery>
  );
};

export default ImageGallery;
