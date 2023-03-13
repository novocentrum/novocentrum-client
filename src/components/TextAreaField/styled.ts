import styled from "@emotion/styled";

export const StyledTextarea = styled('textarea')<{width}>`
  width: ${({width}) => width ? `${width}px` : 'auto'};
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