import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';

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

const ProductDetails = (props) => {
  const [productData, setProductData] = useState([]);
  const [styleId, setStyleId] = useState('');
  const [styleIndex, setStyleIndex] = useState('');

  useEffect(() => {
    getData(setProductData);
  }, []);

  const getStyleId = (styleId, index) => {
    // console.log({ styleId, index });
    setStyleId(styleId);
    // setStyleIndex(index);
    console.log({ styleId });
  };

  return (
    < Body >
      {console.log({ productData })}
      <Content>
        <LeftColumn>
          <ImageGallery productData={productData[1]} />
        </LeftColumn>
        <RightColumn>
          <ProductInformation product={productData[0]} styles={productData[1]} />
          <StyleSelector styles={productData[1]} getStyleId={getStyleId} />
          <AddToCart styles={productData[1]} />
        </RightColumn>
      </Content>
    </ Body>
  );
};

export default ProductDetails;
