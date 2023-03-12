import React from 'react';
import {StyledContainer} from './styled.ts';
import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";

const Footer = ({
  openFeedbackModal,
  isMobile
}) => {
  return (
    <StyledContainer>
      <FirstPart openFeedbackModal={openFeedbackModal} isMobile={isMobile} />
      <SecondPart isMobile={isMobile} />
    </StyledContainer>
  );
};

export default Footer;