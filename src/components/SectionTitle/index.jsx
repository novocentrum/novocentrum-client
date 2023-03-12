import React from 'react';
import {Typography} from "@mui/material";

const SectionTitle = ({title, isMobile}) => {
  return (
    <Typography
      variant={isMobile ? "text26b" : "text40b"}
      color="#000"
      mb={isMobile ? '24px' : '32px'}
      component="h2"
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;