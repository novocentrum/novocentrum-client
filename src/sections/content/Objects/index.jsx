import React from 'react';
import {MotionSectionTitle} from "../../../components/SectionTitle";
import {Grid} from "@mui/material";
import ObjectItem from "./ObjectItem";
import {objects} from "./data";
import MotionBox from "../../../components/MotionBox";
import {opacityAnimation, objectsAnimation} from "../../../utils/animations";

const Objects = ({isMobile}) => {
  return (
    <MotionBox
      maxWidth={1240}
      margin="0 auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <MotionSectionTitle
        title="Что там будет?"
        isMobile={isMobile}
        variants={opacityAnimation}
        viewport={{ once: true }}
      />
      <Grid container>
        {objects.map((object, index) => (
          <ObjectItem
            custom={index + 1}
            key={object.id}
            object={object}
            isMobile={isMobile}
            variants={objectsAnimation}
            viewport={{ once: true }}
          />
        ))}
      </Grid>
    </MotionBox>
  );
};

export default Objects;