import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 shadow-lg flex justify-between items-center">
      <Link to="/">
        <h1 className="text-white font-bold text-lg">🔥 Wildfire Tracker</h1>
      </Link>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleMenu}
          aria-hidden="true"
        ></div>
      )}

      {/* Navigation links */}
      <div
        className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300 ease-in-out`}
      >
        <NavLink
          to="/"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive
              ? 'text-orange-400 py-2 px-4 rounded-md'
              : 'text-white py-2 px-4 rounded-md'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/history"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive
              ? 'text-orange-400 py-2 px-4 rounded-md'
              : 'text-white py-2 px-4 rounded-md'
          }
        >
          History
        </NavLink>
        <NavLink
          to="/alerts"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive
              ? 'text-orange-400 py-2 px-4 rounded-md'
              : 'text-white py-2 px-4 rounded-md'
          }
        >
          Alerts
        </NavLink>
        <NavLink
          to="/resources"
          onClick={handleLinkClick}
          className={({ isActive }) =>
            isActive
              ? 'text-orange-400 py-2 px-4 rounded-md'
              : 'text-white py-2 px-4 rounded-md'
          }
        >
          Resources
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
