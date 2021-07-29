import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';

const Modal = ({ isVisible, setIsVisible, children }) => (
  <>
    {isVisible
      && (
        <ModalWrapper role="dialog">
          <ModalCard>
            <CloseButton
              type="button"
              onClick={() => setIsVisible(false)}
              label="Close"
            />
            <div>{children}</div>
          </ModalCard>
          <Background onClick={() => setIsVisible(false)} />
        </ModalWrapper>
      )}
  </>
);

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background: white;
  border-radius: 5px;
  padding: 15px;
  z-index: 10;
  min-width: 400px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black;
  opacity: 0.5;
`;

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

export default Modal;