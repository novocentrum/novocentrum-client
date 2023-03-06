import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledContainer = styled(Grid)`
  max-width: 1240px;
  margin: 0 auto;
  
  > div:first-of-type {
    padding-left: 0 !important;
  }
`;