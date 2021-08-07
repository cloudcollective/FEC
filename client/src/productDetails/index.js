import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ProductOverview from './components/ProductOverview';
// plug these ids into app.jsx line 14 for testing purposes
// 25167
// 25171
// 25169
// 25170
// 25174

const Body = styled.div`
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 15px;
  flex-flow: row wrap;
`;

const LeftColumn = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 10;
`;

const RightColumn = styled.div`
  width: 30%;
  flex-direction: column;
  padding: 20px;
`;

const ProductDetails = ({ selectedProduct, setFavorite }) => {
  const [productData, setProductData] = useState([]);
  const [style, setStyle] = useState({
    id: '',
    index: '',
    selected: false,
  });

  useEffect(() => {
    setProductData(selectedProduct);
  }, [selectedProduct]);

  const getStyleId = (styleId, styleIndex) => {
    setStyle({
      id: styleId,
      index: styleIndex,
      selected: true,
    });
  };

  const productInfo = productData[0];
  const styleInfo = productData[1];

  return (
    <Body>
      <Content>
        <LeftColumn>
          <ImageGallery
            productStyle={styleInfo}
            styleId={style.id}
            styleIndex={style.index}
            styleSelected={style.selected}
          />
        </LeftColumn>
        <RightColumn>
          <ProductInformation
            product={productInfo}
            styles={styleInfo}
            styleId={style.id}
            styleIndex={style.index}
            styleSelected={style.selected}
          />
          <StyleSelector
            styles={styleInfo}
            getStyleId={getStyleId}
          />
          <AddToCart
            styles={styleInfo}
            styleId={style.id}
            styleIndex={style.index}
            styleSelected={style.selected}
            setFavorite={setFavorite}
          />
        </RightColumn>
      </Content>
      <ProductOverview product={productInfo} />
    </Body>
  );
};

export default ProductDetails;
