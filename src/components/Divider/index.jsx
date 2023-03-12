import React from 'react';
import {StyledWrapper, StyledDivider} from './styled.ts';

const Divider = ({isWhiteBackground, isMobile}) => {
  return (
    <StyledWrapper
      isWhiteBackground={isWhiteBackground}
      isMobile={isMobile}
    >
      <StyledDivider />
    </StyledWrapper>
  );
};
export default Divider;