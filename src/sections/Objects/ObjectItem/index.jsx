import {Typography} from "@mui/material";
import React from 'react';
import {StyledContainer} from './styled.ts';

const ObjectItem = ({object, isMobile}) => {
  return (
    <StyledContainer
      isMobile={isMobile}
      item
      xs={12} sm={6} md={6} lg={3}
    >
      <Typography
        variant="text48sb"
        sx={{
          display: 'inline-block',
          background: 'linear-gradient(137.72deg, rgba(58, 133, 154, 0.8) -29.25%, rgba(83, 189, 176, 0.8) 89.51%), #3A859A',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: '#3A859A',
        }}
      >
        {object.count}
      </Typography>
      <Typography
        variant="text16b"
        m="1rem 0 0.5rem"
      >
        {object.type}
      </Typography>
      <Typography variant="text12m">
        {object.description}
      </Typography>
    </StyledContainer>
  );
};

export default ObjectItem;