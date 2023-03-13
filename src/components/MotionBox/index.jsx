import React from "react";
import { motion } from "framer-motion";

import MuiBox from "@mui/material/Box";

const BoxComponent = React.forwardRef((props, ref) => (
  <MuiBox {...props} ref={ref} />
));

const MotionBox = motion(BoxComponent);

export default MotionBox;