import {Box} from "@mui/material";
import styled from "@emotion/styled";

export const StyledWrapper = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const StyledCheckboxWrapper = styled(Box)<{isDisabledTarget}>`
  margin: 0 24px;
  
  input {
    opacity: 0;
    display: none;

    ~ label::before {
      content: '';
      display: flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border: 1px solid #9E9E9E;
      border-radius: 0.25em;
      cursor: ${({isDisabledTarget}) => !isDisabledTarget && 'pointer'};
    }

    :checked ~ label::before {
      content: '\\2713';
      border-color: transparent;
      background-color: #9DFECE;
    }

    :disabled ~ label::before {
      content: '';
      background-color: #9E9E9E;
    }
  }
`;

export const StyledInputField = styled(Box)`
  //position: absolute;
  //right: 20px;
  //top: 0;
  //bottom: 0;
`;