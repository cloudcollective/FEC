import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ModalForm from './ModalForm.jsx';

const ModalContent = styled.div`
  position: fixed;
  flex-direction: column;
  justify-content: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  background-color: white;
  vertical-align: center;
  z-index: 1000;
  padding: 20px;

`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba( 0, 0, 0, .7);
  z-index: 900;
`;

const Modal = ( { open, children, close } ) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Overlay onClick={close}/>
      <ModalContent>
        {children}
        <ModalForm close={close}/>
      </ModalContent>
    </>,
    document.getElementById('portal'),
  );
};

export default Modal;
