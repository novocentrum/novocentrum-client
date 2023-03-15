import {Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import {StyledWrapper, StyledCheckboxWrapper} from './styled.ts';

const TargetItem = ({
  target,
  isDisabledTarget,
  inProgressTarget,
  changeTargetStatus
}) => {
  return (
    <StyledWrapper>
      <Typography variant="text16" color="#000">
        {target.text}
      </Typography>
      <StyledCheckboxWrapper>
        <input
          id={target._id}
          type="checkbox"
          checked={target.status === 'finished'}
          disabled={isDisabledTarget}
          onChange={() => {
            if (inProgressTarget._id === target._id) {
              changeTargetStatus(target._id);
            }
          }}
        />
        <label htmlFor={target._id}></label>
      </StyledCheckboxWrapper>
    </StyledWrapper>
  );
};

export default TargetItem;