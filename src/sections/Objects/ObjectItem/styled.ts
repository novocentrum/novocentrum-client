import styled from "@emotion/styled";
import {Grid} from "@mui/material";

export const StyledContainer = styled(Grid)<{isMobile}>`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 0 18px;
  
  border-right: ${({isMobile}) => isMobile 
    ? 'none'
    : '1px solid #DFDFDF'
  };
  border-bottom: ${({isMobile}) => isMobile
    ? '1px solid #DFDFDF'
    : 'none'
  };
  
  :last-of-type {
    border-right: none;
    border-bottom: none;
  }
`;