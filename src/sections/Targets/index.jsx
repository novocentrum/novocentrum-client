import {Box, Grid} from "@mui/material";
import React from "react";
import TargetList from "./components/TargetList";
import SectionWrapper from "../../components/SectionWrapper";
import SectionTitle from "../../components/SectionTitle";

const Targets = ({targets, isMobile}) => {
  return (
    <Box maxWidth={1240} margin="0 auto">
      <SectionTitle title="Впереди много работы!" isMobile={isMobile} />
      <SectionWrapper isMobile={isMobile} isTargetsSection={true}>
        <Grid
          item xs={12}
          md={12}
          lg={6}
          order={isMobile ? 1: 2}
          pt={isMobile ? '0 !important' : 'auto'}
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ img: {maxWidth: '100%'} }}
          >
            <img
              src="/images/targets-image.png"
              alt="Targets image"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6} order={isMobile ? 2 : 1}>
          <TargetList targets={targets} isMobile={isMobile} />
        </Grid>
      </SectionWrapper>
    </Box>
  );
};

export default Targets;