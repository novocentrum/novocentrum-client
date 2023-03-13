import React from 'react';
import AdminHeader from "../../sections/admin/AdminHeader";
import AdminTargets from "../../sections/admin/AdminTargets";
import AdminArticles from "../../sections/admin/AdminArticles";

const AdminPanel = () => {
  return (
    <div>
      <AdminHeader />
      <AdminArticles />
      <AdminTargets />
    </div>
  );
};

export default AdminPanel;