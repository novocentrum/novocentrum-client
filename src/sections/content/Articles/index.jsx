import {Box, Grid} from "@mui/material";
import React from "react";
import ArticlesList from "./components/ArticlesList";
import SectionWrapper from "../../../components/SectionWrapper";
import {MotionSectionTitle} from "../../../components/SectionTitle";
import {motion} from 'framer-motion';
import {opacityAnimation, leftAnimation, rightAnimation} from "../../../utils/animations";
import MotionBox from "../../../components/MotionBox";

const Articles = ({articles, isMobile}) => {
  return (
    <Box maxWidth={1240} margin="0 auto">
      <MotionSectionTitle
        title="Актуальные новости"
        isMobile={isMobile}
        variants={opacityAnimation}
        viewport={{ once: true }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SectionWrapper isMobile={isMobile}>
          <Grid item xs={12} md={12} lg={6} order={isMobile ? 2: 1}>
            <motion.div
              variants={leftAnimation}
              viewport={{ once: true }}
            >
              <ArticlesList articles={articles} isMobile={isMobile} />
            </motion.div>
          </Grid>
          <Grid item xs={12} md={12} lg={6} order={isMobile ? 1 : 2}>
            <MotionBox
              width="100%"
              height="100%"
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              sx={{
                img: {
                  maxWidth: '90%',
                  userSelect: 'none'
                }
              }}
              variants={rightAnimation}
              viewport={{ once: true }}
            >
              <img src="/images/articles-image.png" alt="Targets image" />
            </MotionBox>
          </Grid>
        </SectionWrapper>
      </motion.div>
    </Box>
  );
};

export default Articles;