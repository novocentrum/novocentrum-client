import styled from "@emotion/styled";
import {Typography} from "@mui/material";

export const StyledHeader = styled('div')<{isInsideFooter}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 24px;
  background: linear-gradient(90.18deg, #3B869B 0%, #47A3A6 100%);
  border-bottom: 1px solid #306C6F;
`;

export const StyledMenuItem = styled(Typography)<{isInsideFooter}>`
  margin-right: 24px;
  cursor: pointer;
  
  :hover {
    text-decoration: underline;
  }
`;