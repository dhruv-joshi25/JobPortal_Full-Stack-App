import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Job Portal
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-gray-200">
            Jobs
          </Link>
          <Link to="/profile" className="hover:text-gray-200">
            Profile
          </Link>
          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>
          <Link to="/register" className="hover:text-gray-200">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
