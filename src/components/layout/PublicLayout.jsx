// src/components/layout/PublicLayout.jsx
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-primary-800">My App</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/login"
                className="px-4 py-2 rounded-md text-sm font-medium text-primary-700 hover:bg-gray-100"
              >
                Login
              </a>
              <a
                href="/register"
                className="px-4 py-2 rounded-md text-sm font-medium bg-primary-600 text-white hover:bg-primary-700"
              >
                Register
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} My App. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
