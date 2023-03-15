import {Box, Grid} from "@mui/material";
import React from "react";
import {motion} from 'framer-motion';
import TargetList from "./components/TargetList";
import SectionWrapper from "../../../components/SectionWrapper";
import {MotionSectionTitle} from "../../../components/SectionTitle";
import {leftAnimation, opacityAnimation, rightAnimation} from "../../../utils/animations";
import MotionBox from "../../../components/MotionBox";

const Targets = ({targets, isMobile}) => {
  return (
    <Box maxWidth={1240} margin="0 auto">
      <MotionSectionTitle
        title="Впереди много работы!"
        isMobile={isMobile}
        variants={opacityAnimation}
        viewport={{ once: true }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount: 0.2, once: true}}
      >
        <SectionWrapper isMobile={isMobile}>
          <Grid
            item xs={12}
            md={12}
            lg={6}
            pt={isMobile ? '0 !important' : 'auto'}
          >
            <MotionBox
              width="100%"
              height="100%"
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              sx={{ img: {maxWidth: '100%'} }}
              variants={opacityAnimation}
              viewport={{ once: true }}
            >
              <img
                src="/images/targets-image.png"
                alt="Targets image"
              />
            </MotionBox>
          </Grid>
          <Grid item xs={12} md={12} lg={6}>
            <motion.div variants={opacityAnimation} viewport={{ once: true }}>
              <TargetList targets={targets} isMobile={isMobile} />
            </motion.div>
          </Grid>
        </SectionWrapper>
      </motion.div>
    </Box>
  );
};

export default Targets;