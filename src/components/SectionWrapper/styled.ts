import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledContainer = styled(Grid)<{isTargetsSection}>`
  max-width: 1240px;
  margin: 0 auto;
  
  > div:first-of-type {
    padding-left: ${({isTargetsSection}) => !isTargetsSection && '0 !important'};
  }

  > div:last-of-type {
    padding-left: ${({isTargetsSection}) => isTargetsSection && '0 !important'};
  }
`;