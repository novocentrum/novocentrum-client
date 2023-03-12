import {Box} from "@mui/material";
import React from 'react';
import './style.scss';

const MobileMenu = ({isOpenMenu, clickOnMenuHandler}) => {
  return (
    <Box
      className={isOpenMenu ? "nav open" : "nav"}
      onClick={clickOnMenuHandler}
    >
      <span/>
      <span/>
      <span/>
      <span/>
    </Box>
  );
};

export default MobileMenu;