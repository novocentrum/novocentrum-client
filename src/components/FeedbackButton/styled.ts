import styled from "@emotion/styled";

export const StyledFeedbackButton = styled('button')<{isInsideFooter}>`
  height: 48px;
  padding: 0 24px;
  color: #fff;
  background-color: transparent;
  border: ${({isInsideFooter}) => isInsideFooter
    ? '2px solid #F2F7F2'
    : '2px solid #fff'
  };
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all .2s ease-in-out;
  
  :hover {
    background-color: ${({isInsideFooter}) => isInsideFooter
      ? '#3A859A'
      : '#fff'
    };
    color: ${({isInsideFooter}) => !isInsideFooter && '#3A859A'};
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.25);
  }
`;