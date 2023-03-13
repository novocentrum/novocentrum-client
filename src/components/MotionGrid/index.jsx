import React from "react";
import { motion } from "framer-motion";
import {Grid} from "@mui/material";

const GridComponent = React.forwardRef((props, ref) => (
  <Grid {...props} ref={ref} />
));

const MotionGrid = motion(GridComponent);

export default MotionGrid;