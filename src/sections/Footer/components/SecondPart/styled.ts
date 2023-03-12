import styled from '@emotion/styled';
import {Box} from "@mui/material";

export const StyledContainer = styled(Box)<{ isMobile }>`
  display: flex;
  flex-direction: ${({isMobile}) => isMobile ? 'column' : 'row'};
  justify-content: space-between;
`;

export const StyledSocials = styled(Box)<{ isMobile }>`
  a {
    margin-right: 24px;
    
    :last-child {
      margin-right: 0;
    }
  }
`;