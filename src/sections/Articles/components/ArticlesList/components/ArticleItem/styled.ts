import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #F3F6F0;
  border-radius: 8px;
  
  > span:nth-of-type(1) {
    margin-bottom: 12px;
  }
  
  :last-of-type {
    margin-bottom: 0;
  }
`;