import React from 'react';

// Placeholder for where you'd import or define your SVG logo component
// import LogoIcon from './LogoIcon';

const HeroSection: React.FC = () => {
  // Choose one tagline
  const tagline = "Spatially aware. Policy literate. Built for planning.";
  // const tagline = "AI that explains itself. Decisions you can trust.";
  //const tagline = "Open-source support for better planning decisions.";

  return (
    // Basic semantic structure, add Tailwind classes for styling
    <section className="hero-section text-center py-16 px-4 bg-soft-grey"> {/* Example placeholder classes */}
      <div className="container mx-auto">
        {/* Logo Placeholder - Render your SVG component here */}
        <div className="logo-placeholder mb-4 text-deep-navy">
          {/* <LogoIcon /> */}
          <p className="text-xs">(Logo Goes Here)</p>
        </div>

        {/* Stacked Name - Adjust styling as needed */}
        <h1 className="text-4xl font-bold uppercase text-deep-navy mb-2">
          <div>THE</div>
          <div>PLANNER’S</div>
          <div>ASSISTANT</div>
        </h1>
        <p className="text-xl text-deep-navy mb-6">
          {tagline}
        </p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          An open-source tool designed to make planning decisions clearer, faster, and fairer using AI, spatial analysis, and policy interpretation.
        </p>
        {/* CTA Button - Style appropriately, link to #get-involved or similar */}
        <a
          href="#get-involved" // Link to the Get Involved section ID
          className="cta-button inline-block bg-planning-gold text-deep-navy font-bold py-3 px-8 rounded hover:opacity-90 transition-opacity" // Example classes
        >
          Get Involved
        </a>
      </div>
    </section>
  );
};

export default HeroSection;