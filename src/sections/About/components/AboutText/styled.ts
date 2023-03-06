import styled from "@emotion/styled";

export const StyledMoreButton = styled('button')`
  width: 150px;
  height: 48px;
  padding: 0 24px;
  border: 1px solid #4299A1;
  background-color: transparent;
  color: #459DA3;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  :hover {
    background-color: #3A859A;
    border: 2px solid #3A859A;
    box-shadow: 0 0 0 4px rgba(77, 113, 160, 0.25);
    color: #fff;
  }
`;