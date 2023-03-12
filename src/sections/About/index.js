import {Box, Grid} from "@mui/material";
import React from 'react';
import AboutText from "./components/AboutText";
import SectionWrapper from "../../components/SectionWrapper";
import SectionTitle from "../../components/SectionTitle";

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
        <SectionTitle title="Что это за проект?" isMobile={isMobile} />
        <AboutText isMobile={isMobile} />
      </Grid>
      <Grid item xs={12} md={12} lg={6.5} order={isMobile ? 1 : 2}>
        <Box width="100%" height="100%" display="flex" alignItems="center">
          <img
            src="/images/about-image.png" alt="Image about"
            width="100%"
          />
        </Box>
      </Grid>
    </SectionWrapper>
  );
};

export default About;