import React from 'react';
import {ArrowUpIcon, ArrowDownIcon} from "../../../../../../themes/icons";
import {Box} from "@mui/material";

const ButtonItem = ({icon}) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    mr="12px"
    sx={{cursor: 'pointer'}}
  >
    {icon}
  </Box>
);

const ControlButtons = ({
  onUpIconClick,
  onDownIconClick,
  isDisabledUpButton,
  isDisabledDownButton
}) => {
  return (
    <Box display="flex" justifyContent="flex-start" height="48px">
      <Box onClick={onUpIconClick}>
        <ButtonItem icon={
          <ArrowUpIcon
            color={isDisabledUpButton ? '#0000004D' : '#00000099'} />
          }
        />
      </Box>
      <Box onClick={onDownIconClick}>
        <ButtonItem icon={
          <ArrowDownIcon
            color={isDisabledDownButton ? '#0000004D' : '#00000099'} />
          }
        />
      </Box>
    </Box>
  );
};

export default ControlButtons;