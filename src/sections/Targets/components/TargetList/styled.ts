import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const StyledTargetList = styled(Box)`
  display: flex;
  flex-direction: column;
  border: 2px solid #3A859A;
  padding: 16px;
  border-radius: 16px;
  transition: box-shadow 0.2s ease-in-out;
  
  :hover {
    box-shadow: 0 0 10px 4px rgba(58, 133, 154, 0.4);
  }
`;

export const StyledTargetItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 12px;

  :first-of-type {
    margin-top: 0;
  }
`;