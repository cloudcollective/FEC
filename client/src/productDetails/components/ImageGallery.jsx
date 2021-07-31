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

const ImageGallery = ({ productStyle, styleId, styleIndex }) => {
  const [currImg, setCurrImg] = useState(0);

  if (!productStyle && !styleId && !styleIndex) {
    return null;
  }
  const { photos } = productStyle.results[0];

  const changeMainPhoto = (index) => {
    setCurrImg(index);
  };

  /*
  <input type="radio" name="radio-btn" id="radio1" />
  <input type="radio" name="radio-btn" id="radio2" />
  <input type="radio" name="radio-btn" id="radio3" />
  <input type="radio" name="radio-btn" id="radio4" />
  <div className="slide first">
    <img src="1.jpg" alt="">
  </div>
    <div className="slide second">
    <img src="2.jpg" alt="">
  </div>
    <div className="slide third">
    <img src="3.jpg" alt="">
  </div>

  */

  return (
    <Gallery>
      {console.log({ productStyle, styleId, styleIndex })}
      <ThumbContainer>
        {photos.map((photo, index) => (
          <Thumbnails
            src={photo.thumbnail_url}
            key={index} alt="thumbnails"
            onClick={() => changeMainPhoto(index)}
          />
        ))}
      </ThumbContainer>
      <MainImageContainer>
        <MainImage src={photos[currImg].url} alt={productStyle.results.name} />
      </MainImageContainer>
    </Gallery>
  );
};

export default ImageGallery;
