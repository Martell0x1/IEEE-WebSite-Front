import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#050505] text-gray-400 border-t border-white/10 py-10 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-white">
              IEEE <span className="text-[#FF8C00]">Excom</span>
            </span>
            <span className="text-sm text-gray-500">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              to="/privacy"
              className="hover:text-[#FF8C00] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="hover:text-[#FF8C00] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#FF8C00] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
