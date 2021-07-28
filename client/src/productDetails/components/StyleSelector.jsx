import React from 'react';
import styled from 'styled-components';

/*
      <ThumbContainer>
        {photos.map((photo, index) => <Thumbnails src={photo.thumbnail_url} key={index} alt="thumbnails" />)}
      </ThumbContainer>
*/

// styles
const StyleSelector = (props) => (
  <>
    <div>
      <p>STYLE > {props.styles.results[0].name}</p>
    </div>
    <div>
      <img src={props.styles.results[0].photos[0].thumbnail_url} />
    </div>
  </>
);

export default StyleSelector;
