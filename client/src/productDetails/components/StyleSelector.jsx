import React from 'react';
import styled from 'styled-components';

/*
const Gallery = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThumbContainer = styled.div`
  flex-direction: column;
`;

      <ThumbContainer>
        {photos.map((photo, index) => <Thumbnails src={photo.thumbnail_url} key={index} alt="thumbnails" />)}
      </ThumbContainer>

      const Thumbnails = styled.img`
        height: 80px;
        width: 60px;
        object-fit: cover;
        margin: 10px 0;
        cursor: pointer;
        display: block;
      `;
*/

const ThumbContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Thumbnails = styled.img`
  height: 80px;
  width: 60px;
  object-fit: cover;
  margin: 5px;
  cursor: pointer;
  display: block;
  border-radius: 45%;
`;

// styles
const StyleSelector = ({ styles }) => {
  if (!styles) {
    return null;
  }

  return (
    <>
      {console.log(styles)}
      <div>
        {/* change the style name dynamically when clicked */}
        <p>STYLE: {styles.results[0].name}</p>
      </div>
      <ThumbContainer>
        {styles.results.map((style, index) =>
          <Thumbnails src={style.photos[0].thumbnail_url} key={index} alt="thumbnails" />)}
      </ThumbContainer>
    </>
  );
};

export default StyleSelector;
