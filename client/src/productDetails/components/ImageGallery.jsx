import React, { useState } from 'react';
import styled from 'styled-components';

const Gallery = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThumbContainer = styled.div`
  flex-direction: column;
`;

const Thumbnails = styled.img`
  height: 80px;
  width: 60px;
  object-fit: cover;
  margin: 10px;
  cursor: pointer;
  display: block;
`;

const MainImageContainer = styled.div`
`;

const MainImage = styled.img`
  justify-content: center;
  max-height: 700px;
  max-width: 700px;
  cursor: pointer;
  margin: 10px;
`;

const ImageGallery = ({ productData }) => {
  const [currImg, setCurrImg] = useState(0);

  if (!productData) {
    return null;
  }
  const { photos } = productData.results[0];

  const changeMainPhoto = (index) => {
    setCurrImg(index);
  };

  return (
    < Gallery >
      <ThumbContainer>
        {console.log('This is product data: ', productData)}
        {photos.map((photo, index) => <Thumbnails src={photo.thumbnail_url} key={index} alt="thumbnails" onClick={() => changeMainPhoto(index)} />)}
      </ThumbContainer>
      <MainImageContainer>
        <MainImage src={photos[currImg].url} alt="first product image" />
      </MainImageContainer>
    </ Gallery>
  );
};

// ImageGallery.propTypes = {
//   results: PropTypes.arrayOf.isRequired,
// };

export default ImageGallery;
