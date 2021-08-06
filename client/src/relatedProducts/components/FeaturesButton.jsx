import React from 'react';
import ModalWindow from './ModalWindow';
import useToggle from '../../qa/components/common/useToggle';

// eslint-disable-next-line react/prop-types
const FeaturesButton = ({ currentFeatures, relatedFeatures }) => {
  const { on, toggle } = useToggle(false);
  return (
    <>
      <div
        className="buttontype"
        role="button"
        // eslint-disable-next-line no-console
        onKeyUp={() => { console.log('secretMessage'); }}
        onClick={() => {
          toggle(true);
        }}
        tabIndex={0}
      >
        ★
      </div>
      <ModalWindow
        currentFeatures={currentFeatures}
        relatedFeatures={relatedFeatures}
        isVisible={on}
        setIsVisible={toggle}
      />
    </>
  );
};

export default FeaturesButton;
