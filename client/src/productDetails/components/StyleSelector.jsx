import React from 'react';
import styled from 'styled-components';

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

const StyleSelector = ({ styles, getStyleId }) => {
  if (!styles) {
    return null;
  }

  return (
    <>
      <ThumbContainer>
        {styles.results.map((style, index) =>
          <Thumbnails src={style.photos[0].thumbnail_url} key={index} alt="thumbnails" onClick={() => getStyleId(style.style_id, index)} />)}
      </ThumbContainer>
    </>
  );
};

export default StyleSelector;
