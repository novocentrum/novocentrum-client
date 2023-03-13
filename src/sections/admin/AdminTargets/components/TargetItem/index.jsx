import {Box, Typography} from "@mui/material";
import React, {useState} from 'react';
import InputField from "../../../../../components/InputField";
import {
  StyledWrapper,
  StyledInputField,
  StyledCheckboxWrapper
} from './styled.ts';

const TargetItem = ({
  finalDate,
  setFinalDate,
  target,
  isInProgressTarget,
  onCheckboxClick,
}) => {
  const [newTarget, setNewTarget] = useState(target);

  const isDisabledTarget =
    target.status === 'pending' ||
    (target.status === 'inProgress' && !finalDate);

  const onClickHandler = () => {
    if (newTarget.status !== 'finished' && !isDisabledTarget) {
      setNewTarget({...newTarget, status: 'finished'});
      onCheckboxClick({...target, status: 'finished'});
    }
  };

  return (
    <StyledWrapper>
      <Typography variant="text16" color="#000">
        {newTarget.text}
      </Typography>
      <StyledCheckboxWrapper isDisabledTarget={isDisabledTarget} onClick={onClickHandler}>
        <input
          id="status-checkbox"
          type="checkbox"
          checked={newTarget.status === 'finished'}
          disabled={isDisabledTarget}
        />
        <label htmlFor="status-checkbox"></label>
      </StyledCheckboxWrapper>
      {(isInProgressTarget || target.status === 'inProgress') && (
        <StyledInputField>
          <InputField
            mask="99.99.9999"
            placeholder="DD.MM.YYYY"
            onChange={(e) => setFinalDate(e.target.value)}
            value={finalDate}
          />
        </StyledInputField>
      )}
    </StyledWrapper>
  );
};

export default TargetItem;