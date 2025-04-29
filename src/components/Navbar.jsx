import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Base styles for nav links, Tailwind applies active class styles via index.css @layer components
  const linkClass = "nav-link";
  const activeLinkClass = "active"; // This class is defined in index.css

  return (
    <nav className="bg-background border-b border-gray-300 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Title */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img className="h-10 w-auto" src="/logo.svg" alt="The Planner's Assistant Logo" />
              <span className="font-bold text-xl text-text-heading">The Planner's Assistant</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 flex-nowrap flex-shrink-0">
              <NavLink to="/" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`} end>Home</NavLink>
              <NavLink to="/planners" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>For Planners</NavLink>
              <NavLink to="/tech" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>For Tech</NavLink>
              <NavLink to="/about" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>About</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>Contact</NavLink>
              {/* Optional Links */}
              {/* <NavLink to="/demo" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>Demo</NavLink> */}
              {/* <NavLink to="/ledger" className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : ''}`}>Ledger</NavLink> */}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-text-heading hover:text-white hover:bg-highlight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, toggle classes based on state */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-out`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink to="/" className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`} onClick={() => setIsOpen(false)} end>Home</NavLink>
          <NavLink to="/planners" className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`} onClick={() => setIsOpen(false)}>For Planners</NavLink>
          <NavLink to="/tech" className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`} onClick={() => setIsOpen(false)}>For Tech</NavLink>
          <NavLink to="/about" className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`} onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`} onClick={() => setIsOpen(false)}>Contact</NavLink>
          {/* Optional Links */}
           {/* <NavLink to="/demo" className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`} onClick={() => setIsOpen(false)}>Demo</NavLink> */}
           {/* <NavLink to="/ledger" className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : ''}`} onClick={() => setIsOpen(false)}>Ledger</NavLink> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;