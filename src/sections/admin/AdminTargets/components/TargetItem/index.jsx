import {Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import {StyledWrapper, StyledCheckboxWrapper} from './styled.ts';

const TargetItem = ({
  target,
  isDisabledTarget,
  setInProgressStatus
}) => {
  const [newTarget, setNewTarget] = useState(target);

  const changeStatusHandler = () => {
    if (newTarget.status === 'finished') {
      setInProgressStatus('inProgress');
      return setNewTarget({...newTarget, status: 'inProgress'});
    }

    if (newTarget.status === 'inProgress') {
      setInProgressStatus('finished');
      return setNewTarget({...newTarget, status: 'finished'});
    }
  };

  return (
    <StyledWrapper>
      <Typography variant="text16" color="#000">
        {newTarget.text}
      </Typography>
      <StyledCheckboxWrapper>
        <input
          id="status-checkbox"
          type="checkbox"
          checked={newTarget.status === 'finished'}
          disabled={isDisabledTarget}
          onChange={() => {
            if (newTarget.status !== 'finished') {
              changeStatusHandler();
            }
          }}
        />
        <label htmlFor="status-checkbox"></label>
      </StyledCheckboxWrapper>
    </StyledWrapper>
  );
};

export default TargetItem;