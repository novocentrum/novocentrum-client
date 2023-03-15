import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const StyledWrapper = styled(Box)<{badgeсolor, targetStatus, isMobile}>`
  display: inline-block;
  height: 24px;
  width: fit-content;
  margin-left: 8px;
  padding: 0 8px 2px 8px;
  border-radius: 16px;
  background-color: ${({badgeсolor}) => badgeсolor && badgeсolor};
  
  span {
    text-transform: uppercase;
  }
`;