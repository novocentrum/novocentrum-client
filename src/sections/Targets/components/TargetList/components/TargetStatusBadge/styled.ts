import styled from "@emotion/styled";
import {Box} from "@mui/material";

export const StyledWrapper = styled(Box)<{badgeсolor}>`
  display: flex;
  align-items: center;
  height: 24px;
  margin-left: 8px;
  padding: 0 8px;
  border-radius: 16px;
  background-color: ${({badgeсolor}) => badgeсolor && badgeсolor};
`;