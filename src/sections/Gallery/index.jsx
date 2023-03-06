import {Box, Grid} from "@mui/material";
import React from 'react';
import ImageItem from "./components/ImageItem";
import SectionTitle from "../../components/SectionTitle";

const images = [
  '/images/gallery/image-1.webp',
  '/images/gallery/image-2.webp',
  '/images/gallery/image-3.webp',
  '/images/gallery/image-4.webp',
];

const Gallery = ({isMobile}) => (
  <Box maxWidth={1240} margin="0 auto">
    <SectionTitle title="Галерея" />
    <Grid
      container
      spacing={isMobile ? "12px" : "24px"}
    >
      {images.map(image => (
        <ImageItem key={image} image={image} />
      ))}
    </Grid>
  </Box>
);

export default Gallery;