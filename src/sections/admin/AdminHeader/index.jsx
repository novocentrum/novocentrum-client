import {Box} from "@mui/material";
import React from 'react';
import {StyledWrapper} from './styled.ts';
import {AdminLogoIcon, LogoutIcon} from "../../../themes/icons";

const AdminHeader = ({setIsLoggedIn}) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const logout = () => {
    localStorage.setItem('isLoggedIn', "false");
    setIsLoggedIn(false);
  };

  return (
    <StyledWrapper>
      <AdminLogoIcon />
      {isLoggedIn === "true" && (
        <Box onClick={logout}>
          <LogoutIcon />
        </Box>
      )}
    </StyledWrapper>
  );
};

export default AdminHeader;