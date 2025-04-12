import { useAuthStore } from "../store/AuthStore";
import { Link, useLocation } from "react-router-dom";

import React from "react";

function Navbar() {
  const { logout, authUser } = useAuthStore();
  const location = useLocation();
  return (
    <div>
      <div>
        <label>NAVBAR</label>
      </div>
      {location.pathname === "/profile" ? (
        <div>
          <Link to="/">Home</Link>
        </div>
      ) : (
        <div>
          <Link to="/profile">Profile</Link>
        </div>
      )}
      <div>
        {authUser && (
          <button type="button" onClick={logout}>
            logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
