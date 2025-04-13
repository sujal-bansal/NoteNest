import { useAuthStore } from "../store/AuthStore";
import { Link, useLocation } from "react-router-dom";

import React from "react";

function Navbar() {
  const { logout, authUser } = useAuthStore();
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";
  return (
    <nav className="bg-white shadow py-4 mb-6">
      <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">Notes App</h1>
        {!isAuthPage && authUser && (
          <div className="flex items-center gap-4">
            {location.pathname === "/profile" ? (
              <Link
                className="text-blue-600 hover:underline hover:text-blue-800"
                to="/"
              >
                Home
              </Link>
            ) : (
              <Link
                className="text-blue-600 hover:underline hover:text-blue-800"
                to="/profile"
              >
                Profile
              </Link>
            )}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              type="button"
              onClick={logout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
