import React from 'react';
import {Typography} from "@mui/material";
import {getStatusBadgeColor, getStatusBadgeText} from "./utils";
import {StyledWrapper} from "./styled.ts"

const TargetStatusBadge = ({target}) => {
  const finalDate = target.finalDate && target.finalDate.split('T')[0];

  return (
    <StyledWrapper badgeсolor={getStatusBadgeColor(target.status)}>
      <Typography variant="text12sb">
        {getStatusBadgeText(target.status, finalDate ?? '')}
      </Typography>
    </StyledWrapper>
  );
};

export default TargetStatusBadge;