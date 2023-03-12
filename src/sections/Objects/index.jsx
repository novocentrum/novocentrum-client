import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {Box, Grid} from "@mui/material";
import ObjectItem from "./ObjectItem";
import {objects} from "./data";

const Objects = ({isMobile}) => {
  return (
    <Box maxWidth={1240} margin="0 auto">
      <SectionTitle title="Что там будет?" isMobile={isMobile} />
      <Grid
        container
        // columnSpacing="20px"
      >
        {objects.map(object => (
          <ObjectItem
            key={object.id}
            object={object}
            isMobile={isMobile}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Objects;