import {Box, Typography} from "@mui/material";
import React from 'react';
import {StyledContainer} from './styled.ts';
import {LogoIcon} from "../../../../../themes/icons";
import {handleScroll} from "../../../../../utils/handleScroll";

const SecondPart = () => {
  return (
    <StyledContainer>
      <Box onClick={() => handleScroll("header")}>
        <LogoIcon />
      </Box>
      <Typography variant="text12m" color="#C0C0C0">
        © 2023
      </Typography>
    </StyledContainer>
  );
};

export default SecondPart;