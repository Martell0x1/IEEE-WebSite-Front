import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ieeeLogo from "../../../assets/images/IEEE-Logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#09090b]/90 backdrop-blur-md text-white px-4 sm:px-8 py-4 sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={ieeeLogo}
            alt="IEEE Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-105 transition-transform"
          />
          <h1 className="text-lg sm:text-xl font-bold tracking-wide">
            IEEE <span className="text-[#FF8C00]">Excom</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
          <Link
            to="/projects"
            className="hover:text-[#FF8C00] transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/seminars"
            className="hover:text-[#FF8C00] transition-colors"
          >
            Seminars
          </Link>
          <Link
            to="/problem-solving"
            className="hover:text-[#FF8C00] transition-colors"
          >
            Problem solving
          </Link>
          <Link
            to="/cyberSecurity"
            className="hover:text-[#FF8C00] transition-colors"
          >
            Cyber Security
          </Link>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium hover:text-[#FF8C00] transition-colors px-3 py-2"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-[#FF8C00] hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-lg shadow-orange-500/20 active:scale-95"
          >
            Join Community
          </Link>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF8C00]/50"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#FF8C00]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4 pt-4 pb-2 border-t border-white/10 flex flex-col gap-3 text-center animate-fadeIn">
          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-200 hover:text-[#FF8C00] hover:bg-white/5 rounded-lg transition"
          >
            Projects
          </Link>
          <Link
            to="/seminars"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-200 hover:text-[#FF8C00] hover:bg-white/5 rounded-lg transition"
          >
            Seminars
          </Link>
          <Link
            to="/problem-solving"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-200 hover:text-[#FF8C00] hover:bg-white/5 rounded-lg transition"
          >
            Problem solving
          </Link>
          <Link
            to="/cyberSecurity"
            onClick={() => setIsOpen(false)}
            className="py-2 text-gray-200 hover:text-[#FF8C00] hover:bg-white/5 rounded-lg transition"
          >
            Cyber Security
          </Link>
          <div className="flex flex-col gap-2 pt-3 border-t border-white/10 sm:hidden">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="py-2.5 text-gray-300 border border-white/20 rounded-full hover:bg-white/5"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="bg-[#FF8C00] hover:bg-orange-500 text-white py-2.5 rounded-full font-semibold shadow-md shadow-orange-500/20"
            >
              Join Community
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
