import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LayoutContent from 'layouts/Content';
import useRoleAuth from 'hooks/useRoleAuth';

const AppLayout: React.FC = ({ children }) => {
  useRoleAuth();

  return (
    <>
      <Header />
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </>
  );
};

export default AppLayout;
