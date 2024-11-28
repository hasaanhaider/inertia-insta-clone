// Layout.js
import React from 'react';
import Sidebar from './components/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;
