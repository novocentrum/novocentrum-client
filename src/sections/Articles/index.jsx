import {Box, Grid} from "@mui/material";
import React from "react";
import ArticlesList from "./components/ArticlesList";
import SectionWrapper from "../../components/SectionWrapper";
import SectionTitle from "../../components/SectionTitle";

const Articles = ({articles, isMobile}) => {
  return (
    <Box maxWidth={1240} margin="0 auto">
      <SectionTitle title="Актуальные новости" isMobile={isMobile} />
      <SectionWrapper isMobile={isMobile}>
        <Grid item xs={12} md={12} lg={6} order={isMobile ? 2: 1}>
          <ArticlesList articles={articles} isMobile={isMobile} />
        </Grid>
        <Grid item xs={12} md={12} lg={6} order={isMobile ? 1 : 2}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="flex-start"
            sx={{ img: {maxWidth: '90%'} }}
          >
            <img src="/images/articles-image.png" alt="Targets image" />
          </Box>
        </Grid>
      </SectionWrapper>
    </Box>
  );
};

export default Articles;