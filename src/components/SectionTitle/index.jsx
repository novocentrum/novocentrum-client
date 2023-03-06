import React from 'react';
import {Typography} from "@mui/material";

const SectionTitle = ({title}) => {
  return (
    <Typography
      variant="text40"
      color="#000"
      mb="32px"
      component="h2"
    >
      {title}
    </Typography>
  );
};

export default SectionTitle;