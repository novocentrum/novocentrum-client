import {Box, Grid} from "@mui/material";
import React from "react";
import TargetList from "./components/TargetList";
import SectionWrapper from "../../components/SectionWrapper";
import SectionTitle from "../../components/SectionTitle";

const Targets = ({targets, isMobile}) => {
  return (
    <Box maxWidth={1240} margin="0 auto">
      <SectionTitle title="Впереди много работы!" />
      <SectionWrapper isMobile={isMobile}>
        <Grid item xs={12} md={12} lg={6} order={isMobile ? 2: 1}>
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <img src="/images/targets-image.png" alt="Targets image" />
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6} order={isMobile ? 1 : 2}>
          <TargetList targets={targets} />
        </Grid>
      </SectionWrapper>
    </Box>
  );
};

export default Targets;