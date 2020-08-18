import React from 'react';
import Footer from '../App/Footer';
import AdminHeader from './Header';
import LayoutContent from 'layouts/Content';

const AdminLayout: React.FC = ({ children }) => (
  <>
    <AdminHeader />
    <LayoutContent>{children}</LayoutContent>
    <Footer />
  </>
);

export default AdminLayout;
