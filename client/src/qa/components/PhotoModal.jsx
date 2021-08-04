import React from 'react';
import styled from 'styled-components';
import Modal from './common/Modal';
import useToggle from './common/useToggle';

const PhotoModal = ({ url, description, index }) => {
  const { on, toggle } = useToggle();

  return (
    <>
      <Modal
        isVisible={on}
        setIsVisible={toggle}
      >
        <ModalImage
          src={url}
          alt={`${description}-img${index}`}
        />
      </Modal>
      <Thumbnail
        src={url}
        onClick={toggle}
        alt={`${description}-thumbnail${index}`}
      />
    </>
  );
};

const Thumbnail = styled.img`
  max-width: 180px;
  max-height: 100px;
  cursor: pointer;
  margin: 6px 6px 6px 0px;
  border: 2px solid black;
`;

const ModalImage = styled.img`
  height: 400px;
  margin: 10px;
`;

export default PhotoModal;
