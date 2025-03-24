import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className='bg-gray-800 p-4 shadow-lg flex justify-between items-center'>
     <Link to="/">
     <h1 className="text-white font-bold text-lg">🔥 Wildfire Tracker</h1>
     </Link>
     

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation links */}
      <div className={`flex flex-col md:flex-row gap-4 md:gap-8 items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <NavLink to="/" className="text-white hover:text-orange-400 cursor-pointer py-2 px-4 rounded-md">
          Home
        </NavLink>
        <NavLink to="/history" className="text-white hover:text-orange-400 cursor-pointer py-2 px-4 rounded-md">
          History
        </NavLink>
        <NavLink to="/alerts" className="text-white hover:text-orange-400 cursor-pointer py-2 px-4 rounded-md">
          Alerts
        </NavLink>
        <NavLink to="/resources" className="text-white hover:text-orange-400 cursor-pointer py-2 px-4 rounded-md">
          Resources
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
