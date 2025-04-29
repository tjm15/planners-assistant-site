import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-12 py-8">
      <div className="container mx-auto px-4 text-center text-text-body text-sm">
        <p>© {new Date().getFullYear()} The Planner’s Assistant Project Contributors.</p>
        <p className="mt-1">An open civic-tech prototype for spatial planning support.</p>
        <div className="mt-4 space-x-4">
           <Link to="/about" className="hover:underline">About</Link>
           <span>|</span>
           <Link to="/contact" className="hover:underline">Contact</Link>
           <span>|</span>
           {/* Add Privacy Policy/Terms links if needed */}
           <a href="https://github.com/the-planners-assistant" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;