import {Box} from "@mui/material";
import React from 'react';
import {StyledContainer, StyledSocials} from './styled.ts';
import {InstagramIcon, LinkedInIcon, LogoIcon} from "../../../../themes/icons";
import {handleScroll} from "../../../../utils/handleScroll";

const SecondPart = () => {
  return (
    <StyledContainer>
      <Box onClick={() => handleScroll("header")}>
        <LogoIcon />
      </Box>
      <StyledSocials>
        <a href="https://instagram.com" target="_blank">
          <InstagramIcon />
        </a>
        <a href="google.com" target="_blank">
          <LinkedInIcon />
        </a>
      </StyledSocials>
    </StyledContainer>
  );
};

export default SecondPart;