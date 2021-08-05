import React, { useState } from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbContainer = styled.div`
  max-width: 1000px;
  display: flex;
  min-height: 100px;
  align-items: center;
`;

const Slider = styled.div`
  width: 1000px;
  display: flex;
  overflow: auto;
  white-space: nowrap;
`;

const Thumbnails = styled.img`
  display: block;
  object-fit: cover;
  max-width: 180px;
  max-height: 100px;
  cursor: pointer;
  opacity: 0.5;
  margin: 5px;
  border: 2px solid black;
  &:hover {
    opacity: 0.8;
  }
`;

const ActiveThumbnail = styled.img`
  display: block;
  object-fit: cover;
  max-width: 180px;
  max-height: 100px;
  cursor: pointer;
  opacity: 1;
  margin: 5px;
  border: 2px solid black;
`;

const MainImage = styled.img`
  max-width: 1000px;
  max-height: 600px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid black;
`;

const ImageGallery = ({
  productStyle, styleId, styleIndex, styleSelected,
}) => {
  const [currImg, setCurrImg] = useState(0);

  if (!productStyle && !styleId && !styleIndex && !styleSelected) {
    return null;
  }

  let { photos } = productStyle.results[0];

  if (styleSelected) {
    photos = productStyle.results[styleIndex].photos;
  }

  const changeMainPhoto = (index) => {
    setCurrImg(index);
  };

  return (
    <Gallery>
      <MainImage src={photos[currImg].url} alt={productStyle.results.name} />
      <ThumbContainer>
        <Slider id="slider">
          {photos.map((photo, index) => {
            if (index === currImg) {
              return (
                <ActiveThumbnail
                  src={photo.thumbnail_url}
                  key={index}
                  alt="thumbnails"
                />
              );
            }
            return (
              <Thumbnails
                src={photo.thumbnail_url}
                key={index}
                alt="thumbnails"
                onClick={() => changeMainPhoto(index)}
              />
            );
          })}
        </Slider>
      </ThumbContainer>
    </Gallery>
  );
};

export default ImageGallery;
