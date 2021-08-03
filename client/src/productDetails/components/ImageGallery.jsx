import React, { useState, useRef } from 'react';
import styled from 'styled-components';
// import arrowLeft from '../ArrowImages/arrow-left.png';
// import arrowRight from '../ArrowImages/arrow-right.png';

const Gallery = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbContainer = styled.div`
  max-width: 700px; // same as width of MainImage
  display: flex;
  min-height: 100px;
  align-items: center;
`;

const Slider = styled.div`
  width: 700px;
  display: flex;
  /* flex-wrap: nowrap;
  overflow-x: hidden; */
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
  max-width: 700px;
  max-height: 600px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid black;
`;

const Arrows = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: .3s;
  &:hover {
    opacity: 0.5;
    width: 35px;
    height: 35px;
  }
`;

const ImageGallery = ({
  productStyle, styleId, styleIndex, styleSelected,
}) => {
  const [currImg, setCurrImg] = useState(0);
  const scrollDirection = useRef(null);

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

  const leftArrowOnClick = () => {
    // scrollDirection ? (scrollDirection.current.scrollLeft -= 180) : null;
    console.log(`left clicked`);
  };

  const rightArrowOnClick = () => {
    // scrollDirection ? (scrollDirection.current.scrollLeft -= 180) : null;
    console.log(`right clicked`);
  };

  return (
    <Gallery>
      <MainImage src={photos[currImg].url} alt={productStyle.results.name} />
      <ThumbContainer>
        {/* <Arrows src={arrowLeft} alt="left arrow" /> */}
        {/* <div>
          <Arrows className="leftArrow" onClick={() => leftArrowOnClick}>LEFT</Arrows>
        </div> */}
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
        {/* <Arrows src={arrowRight} alt="right arrow" /> */}
        {/* <div>
          <Arrows className="rightArrow" onClick={() => rightArrowOnClick}>RIGHT</Arrows>
        </div> */}
      </ThumbContainer>
    </Gallery>
  );
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
  <div className="slide fourth">
  <img src="4.jpg" alt="">
</div>
*/

export default ImageGallery;