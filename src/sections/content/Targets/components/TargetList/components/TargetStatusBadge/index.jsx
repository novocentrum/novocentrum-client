import React from 'react';
import {Typography} from "@mui/material";
import {getStatusBadgeColor, getStatusBadgeText} from "./utils";
import {StyledWrapper} from "./styled.ts"

const TargetStatusBadge = ({target, isMobile}) => {
  return (
    <StyledWrapper
      badgeсolor={getStatusBadgeColor(target.status)}
      targetStatus={target.status}
      isMobile={isMobile}
    >
      <Typography variant="text12sb">
        {getStatusBadgeText(target.status)}
      </Typography>
    </StyledWrapper>
  );
};

export default TargetStatusBadge;