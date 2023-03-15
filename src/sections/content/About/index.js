import {Box, Grid} from "@mui/material";
import React from 'react';
import {motion} from "framer-motion";
import AboutText from "./components/AboutText";
import SectionWrapper from "../../../components/SectionWrapper";
import {MotionSectionTitle} from "../../../components/SectionTitle";
import {leftAnimation, opacityAnimation, rightAnimation} from "../../../utils/animations";
import MotionBox from "../../../components/MotionBox";

const About = ({isMobile}) => {
  return (
    <SectionWrapper isMobile={isMobile}>
      <Grid
        item xs={12}
        md={12}
        lg={5.5}
        order={isMobile ? 2 : 1}
        pt={isMobile ? '32px !important' : 0}
      >
        <motion.div variants={opacityAnimation} viewport={{ once: true }}>
          <MotionSectionTitle title="Что это за проект?" isMobile={isMobile} />
          <AboutText isMobile={isMobile} />
        </motion.div>
      </Grid>
      <Grid item xs={12} md={12} lg={6.5} order={isMobile ? 1 : 2}>
        <MotionBox
          variants={opacityAnimation}
          viewport={{ once: true }}
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
        >
          <img
            src="/images/about-image.png" alt="Image about"
            width="100%"
          />
        </MotionBox>
      </Grid>
    </SectionWrapper>
  );
};

export default About;