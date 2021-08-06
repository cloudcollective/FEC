import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ProductOverview from './components/ProductOverview';

// 25167
// 25171
// 25169
// 25170
// 25174
const tempProductID = 25174;

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
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 15px;
`;

const LeftColumn = styled.div`
  width: 75%;
  height: 100%;
  margin: 0 10;
`;

const RightColumn = styled.div`
  flex-direction: column;
  width: 25%;
  padding: 20px;
`;

const ProductDetails = ({ selectedProduct }) => {
  const [productData, setProductData] = useState([]);
  const [styleId, setStyleId] = useState('');
  const [styleIndex, setStyleIndex] = useState('');
  const [styleSelected, setStyleSelected] = useState(false);


  useEffect(() => {
    getData(setProductData);
    // setProductData(selectedProduct);
    // console.log(selectedProduct);
  }, []);

  const getStyleId = (id, index) => {
    setStyleId(id);
    setStyleIndex(index);
    setStyleSelected(true);
  };

  return (
    <Body>
      <Header />
      <Content>
        <LeftColumn>
          <ImageGallery productStyle={productData[1]} styleId={styleId} styleIndex={styleIndex} styleSelected={styleSelected} />
        </LeftColumn>
        <RightColumn>
          <ProductInformation product={productData[0]} styles={productData[1]} styleId={styleId} styleIndex={styleIndex} styleSelected={styleSelected} />
          <StyleSelector styles={productData[1]} getStyleId={getStyleId} />
          <AddToCart styles={productData[1]} styleId={styleId} styleIndex={styleIndex} styleSelected={styleSelected} />
        </RightColumn>
      </Content>
      <ProductOverview product={productData[0]} />
    </Body>
  );
};

export default ProductDetails;
