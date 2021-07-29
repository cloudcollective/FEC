import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
// import ProductOverview from './components/ProductOverview';

const tempProductID = 25167;

const getData = (callback) => {
  axios.get(`/products/${tempProductID}`)
    .then((product) => {
      callback(product.data);
    })
    .catch((err) => {
      console.log(`Failed to fetch data from the server: ${err}`);
    });
};

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

const ProductDetails = (props) => {
  const [productData, setProductData] = useState({});

  useEffect(() => {
    getData(setProductData);
  }, []);

  return (
    < Body >
      {/* {console.log(productData[1])}
      {console.log(productData[0])} */}
      {/* {console.log(props.productStyles)}
      {console.log(props.product)} */}
      <Content>
        <LeftColumn>
          <ImageGallery productData={productData[1]} />
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
    </ Body>
  )
}
export default ProductDetails;
