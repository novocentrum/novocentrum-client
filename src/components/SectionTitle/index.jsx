import React, {forwardRef} from 'react';
import {Typography} from "@mui/material";
import {motion} from "framer-motion";

export const SectionTitle = forwardRef(({title, isMobile}, ref) => {
  return (
    <Typography
      ref={ref}
      variant={isMobile ? "text26b" : "text40b"}
      color="#000"
      mb={isMobile ? '24px' : '32px'}
      component="h2"
    >
      {title}
    </Typography>
  );
});



export const MotionSectionTitle = motion(SectionTitle);