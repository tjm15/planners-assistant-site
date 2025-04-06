import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section py-6 px-4 bg-gray-100 text-deep-navy text-center text-sm"> {/* Example classes */}
      <div className="container mx-auto">
        {/* Add GitHub link, maybe logo again, other relevant links */}
        <p className="mb-2">
          {/* Optional: Link to GitHub repo */}
          <a href="https://github.com/your-org/planners-assistant" target="_blank" rel="noopener noreferrer" className="underline hover:text-planning-gold">GitHub Project</a>
           {/* Add other links like Privacy Policy, etc. if needed */}
        </p>
        <p>
           &copy; {currentYear} The Planner's Assistant Project Contributors. Open Source.
        </p>
      </div>
    </footer>
  );
};

export default Footer;