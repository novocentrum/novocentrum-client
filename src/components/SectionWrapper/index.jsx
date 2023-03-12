import React from 'react';
import {StyledContainer} from "./styled.ts";

const SectionWrapper = ({children, isMobile, isTargetsSection}) => {
  return (
    <>
      <StyledContainer
        isTargetsSection={isTargetsSection}
        container
        columnSpacing={isMobile ? 0 : "32px"}
        rowSpacing={isMobile ? "16px" : 0}
      >
        {children}
      </StyledContainer>
    </>
  );
};

export default SectionWrapper;