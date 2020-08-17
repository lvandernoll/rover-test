import React from 'react';
import { AppLayout } from 'layout/App/AppLayout';

export const AdminLayout: React.FC = ({ children }) => {
  return <AppLayout>{children}</AppLayout>;
};
