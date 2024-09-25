import React from 'react';
import AuthNavbar from '../Components/Navbar/AuthNavbar';
import Footer from '../Components/Footer/Footer';
import Sidebar from '../Components/Sidebar/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <AuthNavbar />
      <Sidebar />
      <div>
        {children}
      </div>
      <Footer />
    </>
  )
}
