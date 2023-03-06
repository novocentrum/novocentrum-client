import React from 'react';
import {StyledWrapper, StyledBackdrop, StyledZoomButton} from './styled.ts';
import {Typography} from "@mui/material";

const ImageItem = ({image}) => {
  return (
    <StyledWrapper item xs={12} md={12} lg={6}>
      <StyledBackdrop>
        <StyledZoomButton>
          <Typography variant="text18b" color="#fff">
            Смотреть
          </Typography>
        </StyledZoomButton>
      </StyledBackdrop>
      <img src={image} alt="Image" />
    </StyledWrapper>
  );
};

export default ImageItem;