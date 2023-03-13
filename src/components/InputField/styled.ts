import styled from "@emotion/styled";
import InputMask from "react-input-mask";

export const StyledInput = styled(InputMask)<{backgroundColor}>`
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
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : 'auto'};
  
  &::placeholder {
    color: #00000080;
  }
`;