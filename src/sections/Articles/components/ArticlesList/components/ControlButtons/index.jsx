import React from 'react';
import {ArrowUpIcon, ArrowDownIcon} from "../../../../../../constants/icons";
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
  onIconClick,
  isDisabledUpButton,
  isDisabledDownButton
}) => {
  return (
    <Box display="flex" justifyContent="flex-start" height="48px" mt="12px">
      <Box onClick={onIconClick}>
        <ButtonItem icon={
          <ArrowUpIcon
            color={isDisabledUpButton ? '#0000004D' : '#00000099'} />
          }
        />
      </Box>
      <Box onClick={onIconClick}>
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