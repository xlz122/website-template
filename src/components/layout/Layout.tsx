import React from 'react';
import { Outlet } from 'react-router';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

function Layout(): React.ReactElement {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
