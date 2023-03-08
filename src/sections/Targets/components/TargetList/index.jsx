import {Typography} from "@mui/material";
import React from 'react';
import {StyledTargetList, StyledTargetItem} from './styled.ts';
import TargetStatusBadge from "./components/TargetStatusBadge";

const TargetList = ({targets, isMobile}) => {
  return (
    <StyledTargetList>
      <Typography variant="text16sb" mb="16px">
        Цели для реализации:
      </Typography>
      {targets.map(target => (
        <StyledTargetItem key={target._id}>
          <Typography variant="text16">
            – {target.text}
            <TargetStatusBadge target={target} isMobile={isMobile} />
          </Typography>
        </StyledTargetItem>
      ))}
    </StyledTargetList>
  );
};

export default TargetList;