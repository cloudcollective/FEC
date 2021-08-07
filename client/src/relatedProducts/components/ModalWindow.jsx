import React from 'react';
import styled from 'styled-components';
import noDuplicates from './noDuplicates';
import Modal from '../../qa/components/common/Modal';

const featuresModal = ({
  currentFeatures, relatedFeatures, isVisible, setIsVisible,
}) => {
  const featuresContainer = styled.div`
  display:flex;
  `;
  const featuresColumn = styled.div`
  height:100px;
  width: 33px;
  border: solid 1px black;
  `;

  const makeEqual = (arrSmall, arrBig) => {
    while (arrBig.length > arrSmall.length) {
      arrSmall.push('empty');
    }
    return arrSmall;
  };
  const check = <div>✓</div>;
  const empty = <div> </div>;

  const leftColumn = [];
  const middleColumn = [];
  const rightColumn = [];

  leftColumn.push(<div>{currentFeatures[0]}</div>);
  middleColumn.push(<div>Features</div>);
  rightColumn.push(<div>{relatedFeatures[0]}</div>);
  if (Array.isArray(currentFeatures[1])) {
    const allFeatures = noDuplicates(currentFeatures[1].concat(relatedFeatures[1]));
    let lTemp = currentFeatures[1].slice();
    let rTemp = relatedFeatures[1].slice();
    lTemp = makeEqual(lTemp, allFeatures);
    rTemp = makeEqual(rTemp, allFeatures);
    for (let i = 0; i < allFeatures.length; i += 1) {
      if (typeof lTemp[i] === 'object') {
        const { feature, value } = lTemp[i];
        const characteristic = `${feature} ${value}`;
        if (characteristic === allFeatures[i]) {
          leftColumn.push(check);
        } else {
          leftColumn.push(empty);
        }
      } else {
        leftColumn.push(empty);
      }
      if (typeof rTemp[i] === 'object') {
        const { feature, value } = rTemp[i];
        const characteristic = `${feature} ${value}`;
        if (characteristic === allFeatures[i]) {
          leftColumn.push(check);
        } else {
          leftColumn.push(empty);
        }
      } else {
        leftColumn.push(empty);
      }
    }
  }

  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <featuresContainer>
        <featuresColumn>{leftColumn}</featuresColumn>
        <featuresColumn>{middleColumn}</featuresColumn>
        <featuresColumn>{rightColumn}</featuresColumn>
      </featuresContainer>
    </Modal>
  );
};

export default featuresModal;

/*
NOTE TO SELF YOU MUST FIX LOGIC WHERE YOU ADD CHECKS AND EMPTY DIVS.
*/