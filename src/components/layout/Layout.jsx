import React from 'react';
import NavbarMain from '../navbar/NavbarMain';
import Footer from '../footer/Footer';

const Layout = ({children}) => {
  return (
    <div>
      <NavbarMain />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;
