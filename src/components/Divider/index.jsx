import React from 'react';
import {StyledWrapper, StyledDivider} from './styled.ts';

const Divider = ({isWhiteBackground}) => {
  return (
    <StyledWrapper isWhiteBackground={isWhiteBackground}>
      <StyledDivider />
    </StyledWrapper>
  );
};
export default Divider;