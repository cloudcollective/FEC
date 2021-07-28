import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
// import ProductOverview from './components/ProductOverview';

const Body = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
`;

const LeftColumn = styled.div`
  display: flex;
  width: 75%;
  border: 10px;
  height: 300px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  border: 10px;
`;

// const Footer = styled.div`
//   padding: 20px;
//   text-align: center;
//   background: #ddd;
//   margin-top: 20px;
// `;

const ProductDetails = (props) => (
  <Body>
    <Content>
      <LeftColumn>
        <ImageGallery photos={props.productStyles} />
      </LeftColumn>

      <RightColumn>
        <ProductInformation product={props.product} styles={props.productStyles} />
        <StyleSelector styles={props.productStyles} />
        <AddToCart styles={props.productStyles} />
      </RightColumn>
    </Content>

    {/* <Footer>
      <ProductOverview product={props.product} />
    </Footer> */}

    {console.log(props.product)}
    {console.log(props.productStyles)}
  </Body>
);

export default ProductDetails;
