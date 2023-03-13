import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const StyledWrapper = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 24px;
  background: linear-gradient(148.18deg, #EDEFF6 0%, #EDF6F5 16.67%, #F6F6ED 100%);
  
  svg:last-of-type {
    cursor: pointer;
  }
`;