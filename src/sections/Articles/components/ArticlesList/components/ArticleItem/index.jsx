import {Typography} from "@mui/material";
import React from "react";
import {format} from "date-fns";
import {StyledWrapper} from "./styled.ts";

const ArticleItem = ({article}) => {
  const createdDate = format(new Date(article.createdAt), 'MM.dd.yyyy, H:mm')

  return (
    <StyledWrapper>
      <Typography variant="text16m" color="#000000">
        {article.text}
      </Typography>
      <Typography variant="text12m" color="#00000080">
        {createdDate}
      </Typography>
    </StyledWrapper>
  );
};

export default ArticleItem;