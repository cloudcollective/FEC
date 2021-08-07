import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StarRatingBar from '../../rr/components/StarRatingBar';
import FeaturesButton from './FeaturesButton';
import DeleteButton from './DeleteButton';

const Card = styled.div`
border: solid 1px #A0A0A0;
height: 390px;
width: 250px;
display: inline-block;
margin-right: 15px;
text-align: center
`;

const CardMaker = ({
  product, currentProduct, rating, buttonType, setFavorite, resetId,
}) => {
  const placeholderImage = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';
  const [productData, setProductData] = useState([]);
  const [currentProductFeatures, setCurrentProductFeatures] = useState([]);
  const [relatedProductedFeatures, setRelatedProductedFeatures] = useState([]);

  useEffect(() => {
    const {
      url, category, name, price,
    } = product;
    setProductData([url, category, name, price]);
  }, [product]);
  useEffect(() => {
    if (buttonType === 'modal') {
      const { name, features } = currentProduct;
      setCurrentProductFeatures([name, features]);
    }
  }, [currentProduct]);
  useEffect(() => {
    if (buttonType === 'modal') {
      const { name, features } = product;
      setRelatedProductedFeatures([name, features]);
    }
  }, [product]);
  return (
    <Card>
      {buttonType === 'modal' && (<FeaturesButton currentFeatures={currentProductFeatures} relatedFeatures={relatedProductedFeatures} />)
      && (
      <div className="center-image">
        <img
          src={`${productData[0]}`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = placeholderImage;
          }}
          alt="default"
          width="210"
          height="288px"
          // onClick={() => {
          //   resetId(product.id);
          // }}
        />
      </div>
      )}
      {buttonType === 'delete' && (<DeleteButton setFavorite={setFavorite} />) && (
      <div className="center-image">
        <img src={`${productData[0]}`} onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} alt="default" width="210" height="288px" />
      </div>
      )}
      <div className="category">
        {`Category: ${productData[1]}`}
      </div>
      <div className="product-name">
        {`Name: ${productData[2]}`}
      </div>
      <div className="price">
        {`Price: $${productData[3]}`}
      </div>
      <div className="stars">
        <StarRatingBar rating={rating} />
      </div>
    </Card>
  );
};
export default CardMaker;
