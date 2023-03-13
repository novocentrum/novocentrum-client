import styled from '@emotion/styled';
import {Box} from "@mui/material";

export const StyledContainer = styled(Box)<{ isMobile }>`
  display: flex;
  flex-direction: ${({isMobile}) => isMobile ? 'column' : 'row'};
  justify-content: space-between;
  align-items: center;
`;