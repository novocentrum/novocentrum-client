import React, {useState} from 'react';
import ImageItem from "./components/ImageItem";
import ImageModal from "./components/ImageModal";
import {MotionSectionTitle} from "../../../components/SectionTitle";
import {imageAnimation, opacityAnimation} from "../../../utils/animations";
import MotionBox from "../../../components/MotionBox";
import MotionGrid from "../../../components/MotionGrid";

const Gallery = ({images, isMobile}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setIsOpenModal(true);
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setIsOpenModal(false);
    setSelectedImage(null);
  };

  return (
    <MotionBox
      maxWidth={1240}
      margin="0 auto"
      initial="hidden"
      whileInView="visible"
    >
      <MotionSectionTitle
        title="Галерея"
        isMobile={isMobile}
        variants={opacityAnimation}
        viewport={{ once: true }}
      />
      <MotionGrid
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        container
        spacing={isMobile ? "12px" : "24px"}
      >
        {images.map((image, index) => (
          <ImageItem
            count={index + 1}
            key={image}
            isMobile={isMobile}
            image={image}
            onClickImage={openImageModal}
            variants={imageAnimation}
            viewport={{ once: true }}
          />
        ))}
      </MotionGrid>
      <ImageModal
        image={selectedImage}
        isOpen={isOpenModal}
        openModal={openImageModal}
        closeModal={closeImageModal}
        isMobile={isMobile}
      />
    </MotionBox>
  );
};

export default Gallery;