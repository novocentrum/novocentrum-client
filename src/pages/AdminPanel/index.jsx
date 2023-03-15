import React, {useEffect, useState} from 'react';
import AdminHeader from "../../sections/admin/AdminHeader";
import AdminTargets from "../../sections/admin/AdminTargets";
import AdminArticles from "../../sections/admin/AdminArticles";
import LoginForm from "../../sections/admin/LoginForm";
import {Box} from "@material-ui/core";

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedInLS = localStorage.getItem('isLoggedIn');

    if (isLoggedInLS === 'true') {
      return setIsLoggedIn(true);
    }

    return setIsLoggedIn(false);
  }, [isLoggedIn]);

  return (
    <>
      <AdminHeader setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn
        ? (
          <>
            <AdminArticles />
            <AdminTargets />
          </>
        ) : (
          <Box display="flex" alignItems="center">
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          </Box>
        )
      }
    </>
  );
};

export default AdminPanel;