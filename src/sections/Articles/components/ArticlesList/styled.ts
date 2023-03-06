import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const StyledArticlesContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 366px;
  overflow: scroll;
  margin-bottom: 12px;

  &::-webkit-scrollbar {
    width: 0;
  }
`;