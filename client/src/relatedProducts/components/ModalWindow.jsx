import React from 'react';
import ModalFeatures from './ModalFeatures';
import Modal from '../../qa/components/common/Modal';

const featuresModal = ({
  currentFeatures, relatedFeatures, isVisible, setIsVisible,
}) => {
  let features = [];
  if (currentFeatures.length) {
    const temp = ModalFeatures(currentFeatures, relatedFeatures);
    features = temp.map((row) => (
      <tbody>
        <tr>
          <td>{row[0]}</td>
          <td>{row[1]}</td>
          <td>{row[2]}</td>
        </tr>
      </tbody>
    ));
  }
  return (
    <Modal
      isVisible={isVisible}
      setIsVisible={setIsVisible}
    >
      <table>
        <tbody>
          <tr>
            <th colSpan="3">Features Overview</th>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>{currentFeatures[0]}</td>
            <td>Features</td>
            <td>{relatedFeatures[0]}</td>
          </tr>
        </tbody>
        {features}
      </table>
    </Modal>
  );
};

export default featuresModal;

/*
NOTE TO SELF YOU MUST FIX LOGIC WHERE YOU ADD CHECKS AND EMPTY DIVS.
*/
