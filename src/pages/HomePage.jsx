import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-background to-gray-100 py-20 px-4 text-center">
        <div className="container mx-auto flex flex-col items-center">
          {/* --- OPTIONAL HERO LOGO --- */}
          <img
            src="/logo.svg"
            alt="The Planner's Assistant Logo"
            className="h-24 md:h-32 w-auto mb-6"
          />
          {/* --- END HERO LOGO --- */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading mb-4">
            The Planner’s Assistant
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-highlight mb-6">
            Spatially aware. Policy literate. Open by design.
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-text-body mb-10">
            An open-source, civic-tech initiative using AI, spatial analysis, and policy interpretation to help make planning decisions clearer, faster, and fairer.
          </p>
          <div className="space-x-4">
            <Link to="/planners" className="btn btn-primary">Learn More (Planners)</Link>
            <Link to="/tech" className="btn btn-secondary">Explore Tech (Developers)</Link>
          </div>
        </div>
      </div>

      {/* Introduction / Audience Split */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-center">Planning is Complex. Technology Can Help.</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          We're building tools to augment planning expertise, providing clearer insights from policy and spatial data. Choose your path below to learn more:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card for Planners */}
          <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
            <h3 className="text-highlight !mt-0">For Urban Planners</h3>
            <p>Discover how The Planner's Assistant aims to streamline workflows, surface relevant policy, and ensure transparent, explainable decision support.</p>
            <Link to="/planners" className="text-highlight font-semibold hover:underline mt-4 inline-block">See Planner Benefits →</Link>
          </div>

          {/* Card for Technologists */}
          <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
            <h3 className="text-text-heading !mt-0">For Technologists</h3>
            <p>Explore our open-source tech stack, contribution guidelines, development roadmap, and how you can get involved in building this civic-tech tool.</p>
            <Link to="/tech" className="text-highlight font-semibold hover:underline mt-4 inline-block">View Tech Details →</Link>
          </div>
        </div>
      </div>

      {/* Add other sections as needed - e.g., Key Features Overview */}

    </>
  );
}

export default HomePage;