import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-800 text-white w-64 p-4 fixed top-0 bottom-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40 md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h1 className="text-xl font-bold">Menu</h1>
          <button onClick={toggleSidebar} aria-label="Close Sidebar">
            <FaTimes size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-2">
          <Link
            to="/"
            className="hover:bg-gray-700 p-2 rounded text-sm md:text-base"
          >
            Contacts
          </Link>
          <Link
            to="/dashboard"
            className="hover:bg-gray-700 p-2 rounded text-sm md:text-base"
          >
            Dashboard
          </Link>
        </nav>
      </aside>

      {/* Hamburger Button */}
      {!isSidebarOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50">
          <button onClick={toggleSidebar} aria-label="Open Sidebar">
            <FaBars size={24} />
          </button>
        </div>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 p-4 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-0'
        } md:ml-64 bg-gray-100 overflow-y-auto`}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
