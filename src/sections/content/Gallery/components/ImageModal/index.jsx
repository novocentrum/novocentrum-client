import React from 'react';
import {StyledDialog, CloseIconWrapper} from "./styled.ts";
import {CloseIcon} from "../../../../../themes/icons";

const ImageModal = ({image, isOpen, closeModal, isMobile}) => {
  return (
    <StyledDialog
      open={isOpen}
      onClose={closeModal}
      isMobile={isMobile}
    >
      <CloseIconWrapper onClick={closeModal}>
        <CloseIcon color="#fff" />
      </CloseIconWrapper>
      <img
        src={image}
        alt="Image"
        width="100%"
        height="100%"
        loading="eager"
      />
    </StyledDialog>
  );
};

export default ImageModal;