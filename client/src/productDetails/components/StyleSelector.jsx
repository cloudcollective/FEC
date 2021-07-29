/* eslint-disable react/prop-types */
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
          <Thumbnails src={style.photos[0].thumbnail_url} key={index} alt="thumbnails" onClick={() => console.log(style.style_id)} />)}
      </ThumbContainer>
    </>
  );
};

export default StyleSelector;
