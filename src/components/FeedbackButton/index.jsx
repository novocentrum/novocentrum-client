import React from "react";
import {StyledFeedbackButton} from "./styled.ts";
import {Typography} from "@mui/material";

const FeedbackButton = ({
  isInsideFooter,
  clickButtonHandler,
  title
}) => {
  return (
    <StyledFeedbackButton isInsideFooter={isInsideFooter} onClick={clickButtonHandler}>
      <Typography variant="text18b">
        {title ?? 'Обратная связь'}
      </Typography>
    </StyledFeedbackButton>
  );
};

export default FeedbackButton;