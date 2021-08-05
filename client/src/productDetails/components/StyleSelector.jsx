import React, { useState } from 'react';
import styled from 'styled-components';

const ThumbContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
`;

const Thumbnails = styled.img`
  height: 80px;
  width: 60px;
  object-fit: cover;
  margin: 5px;
  cursor: pointer;
  display: block;
  border-radius: 50%;
  &:hover {
    border: 1px solid black;
  }
`;

const SelectedThumbnails = styled.img`
  height: 80px;
  width: 60px;
  object-fit: cover;
  margin: 5px;
  cursor: pointer;
  display: block;
  border-radius: 50%;
  border: 2px solid black;
`;

const StyleSelector = ({ styles, getStyleId }) => {
  const [selectedStyle, setSeletedStyle] = useState('');

  const clickHandler = (id, index) => {
    getStyleId(id, index);
    setSeletedStyle(id);
  };

  if (!styles) {
    return null;
  }

  return (
    <>
      <ThumbContainer>
        {styles.results.map((style, index) =>
          <Thumbnails src={style.photos[0].thumbnail_url} key={index} alt="thumbnails" onClick={() => clickHandler(style.style_id, index)} />
        )}
      </ThumbContainer>
    </>
  );
};

export default StyleSelector;
