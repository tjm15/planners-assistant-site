import React from 'react';
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE


function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-center">About The Planner’s Assistant</h1>
      <p className="text-center text-xl text-highlight mb-12">Building better planning tools through open collaboration.</p>

      <section>
        <h2>Project Motivation</h2>
        <p>Placeholder: Explain the "why" behind the project. What problems in the current planning system motivated its creation? Refer back to the complexity mentioned in the original HTML.</p>
        <p>The UK planning system is crucial for shaping our built environment, but it faces significant challenges: navigating complex and lengthy policy documents, integrating diverse spatial data, ensuring consistency, and maintaining public trust. Traditional tools often struggle to keep pace. We believe thoughtful application of modern technology, particularly AI and spatial analysis, can help address these challenges by augmenting the capabilities of planning professionals.</p>
         <p>This project was born out of a desire to create open, accessible, and trustworthy tools that support better, fairer, and more transparent planning decisions.</p>
      </section>

      <section>
        <h2>Our Values</h2>
        <p>Placeholder: List the core principles guiding the project's development.</p>
        <ul className="!list-none !pl-0 space-y-4">
          <li><strong><span className="text-highlight">✓</span> Openness:</strong> We are committed to open source code, open data principles (where feasible), and transparent development processes.</li>
          <li><strong><span className="text-highlight">✓</span> Collaboration:</strong> We believe the best tools are built with diverse input from planners, technologists, policymakers, and the public.</li>
          <li><strong><span className="text-highlight">✓</span> Public Interest:</strong> Our primary goal is to serve the public good by improving the planning process, not commercial gain.</li>
          <li><strong><span className="text-highlight">✓</span> Explainability:</strong> AI in planning must be transparent. We prioritize building tools whose reasoning can be understood and verified.</li>
           <li><strong><span className="text-highlight">✓</span> Pragmatism:</strong> We focus on building practical tools that address real-world planning needs, avoiding technology for technology's sake.</li>
           <li><strong><span className="text-highlight">✓</span> Empowerment:</strong> Our tools aim to augment human expertise and judgment, not replace it.</li>
        </ul>
      </section>

      <section>
        <h2>Vision</h2>
        <p>Placeholder: Describe the long-term aspiration for the project and its potential impact.</p>
        <p>Our vision is a future where technology seamlessly supports planning professionals in making informed, efficient, and equitable decisions. We envision The Planner's Assistant evolving into a comprehensive, trusted open-source toolkit used by local authorities and planning consultancies across the UK.</p>
        <p>Beyond individual decision support, we aspire to contribute to systemic improvements by enabling better data analysis (see <Link to="/ledger">The Spatial Ledger</Link>) and fostering a community dedicated to ethical and effective civic technology in the planning domain.</p>
      </section>

       {/* Optional: Add a section about the team or key contributors later */}
       {/*
       <section>
           <h2>The Team</h2>
           <p>Placeholder: Introduce core contributors or participating organizations if applicable.</p>
       </section>
       */}
    </div>
  );
}

export default AboutPage;