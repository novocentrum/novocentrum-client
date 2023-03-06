import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const StyledWrapper = styled(Box)<{isWhiteBackground}>`
  height: 1px;
  margin: 0 auto;
  background: ${({isWhiteBackground}) => isWhiteBackground
    ? '#fff'
    : 'linear-gradient(148.18deg, #EDEFF6 0%, #EDF6F5 17.19%, #EDF6F5 44.79%, #F6F6ED 100%)'
  };
`;

export const StyledDivider = styled(Box)`
  height: 1px;
  max-width: 1240px;
  margin: 0 auto;
  background-color: #3A859A;
`;