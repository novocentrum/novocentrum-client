import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 16px;
  background-color: #F3F6F0;
  border-radius: 8px;
  
  :last-of-type {
    margin-bottom: 0;
  }
`;