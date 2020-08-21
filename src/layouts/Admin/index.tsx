import React from 'react';
import Footer from '../App/Footer';
import AdminHeader from './Header';
import LayoutContent from 'layouts/Content';
import useRoleAuth from 'hooks/useRoleAuth';

const AdminLayout: React.FC = ({ children }) => {
  useRoleAuth();

  return (
    <>
      <AdminHeader />
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </>
  );
};

export default AdminLayout;
