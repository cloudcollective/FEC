import React from 'react';
import styled from 'styled-components';
import ModalFeatures from './ModalFeatures';
import Modal from '../../qa/components/common/Modal';

// const featuresContainer = styled.div`
//   display:flex;
//   `;
// const featuresColumn = styled.div`
//   height:100px;
//   width: 33px;
//   border: solid 1px black;
//   `;

const featuresModal = ({
  currentFeatures, relatedFeatures, isVisible, setIsVisible,
}) => {
  let features = [];
  if (currentFeatures.length) {
    features = ModalFeatures(currentFeatures, relatedFeatures);
  }
  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <table>
        <thread>
          <tr>
            <th colSpan="3">Features Overview</th>
          </tr>
        </thread>
        <tbody>
          <tr>
            <td className="left">{currentFeatures[0]}</td>
            <td>Features</td>
            <td className="right">{relatedFeatures[0]}</td>
          </tr>
          {/* <tr>
            <td>V</td>
            <td>with two columns</td>
            <td>X</td>

          </tr> */}
          {features}
        </tbody>
      </table>
    </Modal>
  );
};

export default featuresModal;

/*
NOTE TO SELF YOU MUST FIX LOGIC WHERE YOU ADD CHECKS AND EMPTY DIVS.
*/
