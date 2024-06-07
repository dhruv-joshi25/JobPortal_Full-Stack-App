import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
        </div>
        <nav className="space-x-4">
          <Link to="/about" className="hover:text-gray-200">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-200">
            Contact
          </Link>
          <Link to="/privacy" className="hover:text-gray-200">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-gray-200">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
