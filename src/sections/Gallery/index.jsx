import {Box, Grid} from "@mui/material";
import React, {useState} from 'react';
import ImageItem from "./components/ImageItem";
import ImageModal from "./components/ImageModal";
import SectionTitle from "../../components/SectionTitle";

const images = [
  '/images/gallery/image-1.webp',
  '/images/gallery/image-2.webp',
  '/images/gallery/image-3.webp',
  '/images/gallery/image-4.webp',
];

const Gallery = ({isMobile}) => {
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
    <Box maxWidth={1240} margin="0 auto">
      <SectionTitle title="Галерея" isMobile={isMobile} />
      <Grid
        container
        spacing={isMobile ? "12px" : "24px"}
      >
        {images.map(image => (
          <ImageItem key={image} image={image} onClickImage={openImageModal} />
        ))}
      </Grid>
      <ImageModal
        image={selectedImage}
        isOpen={isOpenModal}
        openModal={openImageModal}
        closeModal={closeImageModal}
        isMobile={isMobile}
      />
    </Box>
  );
};

export default Gallery;