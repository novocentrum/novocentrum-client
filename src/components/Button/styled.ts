import styled from "@emotion/styled";

export const StyledButton = styled('button')<{isLoading, disable}>`
  height: 48px;
  width: 145px;
  padding: 0 24px;
  color: #fff;
  background-color: ${({isLoading, disabled}) => isLoading || disabled ? '#2e2e2e' : '#3A859A'};
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: ${({isLoading, disabled}) => isLoading || disabled ? 'auto' : 'pointer'};
  transition: all .2s ease-in-out;
  
  :not(:disabled):hover {
    background-color: #fff;
    color: #3A859A;
    border-color: #3A859A;
  }
`;