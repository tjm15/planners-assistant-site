import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-center">About The Planner’s Assistant</h1>
      <p className="text-center text-xl text-highlight mb-12">Public-interest technology for the future of planning.</p>

      <section>
        <h2>Project Motivation</h2>
        <p>
          The UK planning system profoundly shapes our communities and built environment, yet it struggles with complexity, inconsistency, and transparency. Planners must interpret intricate policy documents, respond to site-specific constraints—ranging from overlapping conservation designations to flood risk, housing targets, or infrastructure limitations—and engage the public in meaningful dialogue. All of this unfolds under tight time pressures, resource constraints, and rising public scrutiny. Existing tools often lack the flexibility, context-awareness, or openness to meet these challenges effectively.
        </p>
        <p>
          The Planner’s Assistant was created in response to these systemic tensions. We believe the planning system deserves high-quality, open infrastructure—built not behind closed doors, but with professional input and civic values at its core. Our approach brings together explainable AI, geospatial analysis, and structured policy interpretation to assist with core planning tasks: checking constraints, detecting contradictions, and drafting reasoning in a way that can be traced and trusted. We aim to complement existing workflows, not replace them, and to offer a platform that public authorities, researchers, and independent practitioners can adopt, extend, and trust—much like OpenStreetMap has done in mapping.
        </p>
      </section>

      <section>
        <h2>Our Core Values</h2>
        <ul className="!list-none !pl-0 space-y-4">
          <li>
            <strong><span className="text-highlight">✓</span> Openness:</strong> Committed to open-source code, accessible data (where feasible), and transparent development processes—free from proprietary lock-in.
          </li>
          <li>
            <strong><span className="text-highlight">✓</span> Collaboration:</strong> Actively engaging input from planners, technologists, researchers, policymakers, and the broader civic tech community.
          </li>
          <li>
            <strong><span className="text-highlight">✓</span> Public Interest:</strong> Rooted in civic purpose and long-term public value, not short-term commercial incentives.
          </li>
          <li>
            <strong><span className="text-highlight">✓</span> Explainability:</strong> Prioritising AI systems that make their reasoning clear, inspectable, and easy to challenge.
          </li>
          <li>
            <strong><span className="text-highlight">✓</span> Pragmatism:</strong> Focused on building useful, interoperable tools that solve practical problems—no unnecessary complexity, no empty innovation.
          </li>
          <li>
            <strong><span className="text-highlight">✓</span> Empowerment:</strong> Supporting professional judgement, not replacing it. Our tools aim to reduce friction, not remove discretion.
          </li>
        </ul>
      </section>

      <section>
        <h2>Vision</h2>
        <p>
          We imagine a future where open digital tools form the backbone of the planning system—tools that are trusted, collaboratively maintained, and capable of handling complexity without sacrificing clarity. The Planner’s Assistant aspires to become a widely adopted framework that helps planning professionals interpret policy, understand site constraints, and communicate decisions more transparently.
        </p>
        <p>
          Beyond individual case support, we aim to contribute to broader reform. Projects like <Link to="/ledger">The Spatial Ledger</Link> will allow for system-wide analysis of how policies are applied, where trade-offs occur, and how decisions align with local and national goals. Our long-term goal is to help establish a civic-tech ecosystem around planning: transparent, explainable, public by design.
        </p>
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