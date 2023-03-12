import styled from "@emotion/styled";
import {Box, Dialog} from "@mui/material";

export const StyledDialog = styled(Dialog)<{isMobile}>`
  .MuiBackdrop-root {
    background-color: #000000CC;
  }
  
  .MuiPaper-root {
    margin: ${({isMobile}) => isMobile ? '0 16px' : 'auto'};
    width: ${({isMobile}) => isMobile ? '100%' : '70%'};
    box-shadow: none;
    background-color: transparent;
    overflow: hidden;
    
    img {
      object-fit: cover;
      border-radius: 0.5rem;
    }
  }
`;

export const CloseIconWrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 24px;
  margin-right: 0;
`;