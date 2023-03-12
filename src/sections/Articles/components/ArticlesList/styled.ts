import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledArticlesContainer = styled(Box)<{isMobile}>`
  display: flex;
  flex-direction: column;
  height: ${({isMobile}) => isMobile ? 414 : 350}px;
  overflow: scroll;
  margin-bottom: 12px;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0;
  }
`;