import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LayoutContent from 'layouts/Content';

const AppLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <LayoutContent>{children}</LayoutContent>
    <Footer />
  </>
);

export default AppLayout;
