import React from 'react';
import {StyledWrapper} from './styled.ts';
import {AdminLogoIcon, LogoutIcon} from "../../../themes/icons";

const AdminHeader = () => {
  return (
    <StyledWrapper>
      <AdminLogoIcon />
      <LogoutIcon />
    </StyledWrapper>
  );
};

export default AdminHeader;