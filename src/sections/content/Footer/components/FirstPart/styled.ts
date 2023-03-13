import styled from '@emotion/styled';
import {Box} from "@mui/material";

export const StyledContainer = styled(Box)<{isMobile}>`
  display: flex;
  flex-direction: ${({isMobile}) => isMobile ? 'column' : 'row'};
  justify-content: space-between;
  border-bottom: 1px solid #FFFFFF26;
  padding-bottom: 24px;
  margin-bottom: 24px;
`;

export const StyledLeft = styled(Box)<{isMobile}>`
  border-top: ${({isMobile}) => isMobile
    ? '1px solid #FFFFFF26'
    : 'none'
  };
  display: flex;
  flex-direction: column;
`;