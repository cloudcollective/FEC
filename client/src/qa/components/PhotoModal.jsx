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
        <ImageBox>
          <ModalImage
            src={url}
            alt={`${description}-img${index}`}
          />
        </ImageBox>
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

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled.img`
  max-height: 600px;
  margin: 10px;
`;

export default PhotoModal;
