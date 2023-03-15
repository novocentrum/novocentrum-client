import styled from "@emotion/styled";
import {Dialog} from "@mui/material";

export const StyledDialog = styled(Dialog)<{isMobile}>`
  .MuiPaper-root {
    min-width: ${({isMobile}) => isMobile ? 'auto' : '665px'};
    width: ${({isMobile}) => isMobile ? '85%' : '665px'};
    border-radius: 16px;
    padding: 24px;
  }
`;

export const StyledInput = styled('input')`
  max-width: 100%;
  height: 56px;
  padding: 0 16px;
  border: 1px solid #000;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  letter-spacing: 0.5px;
  
  &::placeholder {
    color: #00000080;
  }
`;

export const StyledTextarea = styled('textarea')`
  max-width: 100%;
  padding: 16px;
  border: 1px solid #000;
  border-radius: 8px;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  letter-spacing: 0.5px;

  &::placeholder {
    font-family: 'Gilroy', sans-serif;
    color: #00000080;
  }
`;

export const StyledButton = styled('button')<{isLoading}>`
  height: 48px;
  width: 145px;
  padding: 0 24px;
  color: #fff;
  background-color: ${({isLoading}) => isLoading ? 'grey' :'#3A859A'};
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  :disabled {
    background-color: grey;
  }
  
  :hover {
    background-color: #fff;
    color: #3A859A;
    border-color: #3A859A;
  }
`;