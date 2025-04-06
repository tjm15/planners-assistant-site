import React from 'react';

const IntroMissionSection: React.FC = () => {
  return (
    <section id="intro-mission" className="intro-mission-section py-12 px-4"> {/* Example placeholder classes */}
      <div className="container mx-auto max-w-4xl"> {/* Example width constraint */}
         {/* Content provided by user */}
        <h2 className="text-3xl font-bold text-deep-navy mb-4 text-center">
             AI-powered support for fair, transparent, and spatially-aware planning decisions.
        </h2>
        <p className="text-lg mb-6">
            Planning in the UK is complex, discretionary, and often overwhelmed by paperwork, policy layers, and reactive processes. The Planner’s Assistant is an open-source tool designed to help planning authorities, housing advocates, and civic technologists cut through the noise—without cutting corners.
        </p>
        <p className="text-lg mb-8">
            We combine AI reasoning, GIS constraint analysis, and structured policy interpretation to support the decision-making process, not replace it. The goal isn’t to automate planning—it’s to build tools that help humans see clearly, reason transparently, and act justly in the built environment.
        </p>

        <h3 className="text-2xl font-bold text-deep-navy mb-4">
            🎯 Our Mission
        </h3>
        <p className="mb-4 text-lg">
            To build an open, modular, and explainable AI planning platform that:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg mb-6">
            <li>Supports planning officers and civic actors, not replaces them</li>
            <li>Interprets policies spatially and contextually, not just semantically</li>
            <li>Audits local plans, highlights contradictions, and proposes alternatives</li>
            <li>Enables faster, fairer, and more transparent planning decisions</li>
            <li>Works alongside existing systems (e.g. BOPS, PlanX) rather than competing with them</li>
            <li>Remains open-source and publicly accountable—accessible to LPAs, researchers, and citizens alike</li>
        </ul>
         <p className="text-lg italic">
            We're designing for a world where AI is a trusted co-pilot in the planning process: transparent, auditable, and grounded in real-world constraints—not a black box.
        </p>
      </div>
    </section>
  );
};

export default IntroMissionSection;