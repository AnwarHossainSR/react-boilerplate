// src/components/layout/DashboardLayout.jsx
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashboardLayout = () => {
  const { user, logoutUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // If user is not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 ease-in-out bg-primary-800 text-white flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-primary-700">
          <h1 className={`text-xl font-bold ${!isSidebarOpen && "sr-only"}`}>
            Dashboard
          </h1>
          <button
            onClick={toggleSidebar}
            className="p-1 rounded-md hover:bg-primary-700"
          >
            {isSidebarOpen ? "«" : "»"}
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 rounded-md hover:bg-primary-700"
              >
                <span className="material-icons">dashboard</span>
                {isSidebarOpen && <span className="ml-3">Dashboard</span>}
              </a>
            </li>
            <li>
              <a
                href="/dashboard/profile"
                className="flex items-center p-2 rounded-md hover:bg-primary-700"
              >
                <span className="material-icons">person</span>
                {isSidebarOpen && <span className="ml-3">Profile</span>}
              </a>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-primary-700">
          <button
            onClick={logoutUser}
            className="flex items-center w-full p-2 rounded-md hover:bg-primary-700"
          >
            <span className="material-icons">logout</span>
            {isSidebarOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Application</h1>
            <div className="flex items-center">
              <span className="mr-4">{user.name || "User"}</span>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
