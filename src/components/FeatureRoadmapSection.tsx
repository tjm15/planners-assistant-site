import React from 'react';

// Define an interface for roadmap item props if needed for structure/typing
interface RoadmapItemProps {
  title: string;
  status: string;
  description: React.ReactNode; // Allow JSX like <ul><li>...</li></ul>
}

const RoadmapItem: React.FC<RoadmapItemProps> = ({ title, status, description }) => (
  <div className="roadmap-item mb-6 p-4 border border-gray-200 rounded"> {/* Example card styling */}
    <h4 className="text-xl font-bold text-deep-navy">{title}</h4>
    <p className="text-sm text-gray-600 mb-2">Status: {status}</p>
    <div className="text-base">{description}</div>
  </div>
);


const FeatureRoadmapSection: React.FC = () => {
  return (
    <section id="roadmap" className="feature-roadmap-section py-12 px-4 bg-soft-grey"> {/* Example placeholder classes */}
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-deep-navy mb-4 text-center">
          🧩 Feature Roadmap
        </h2>
        <p className="text-lg mb-8 text-center">
          We’re building an open-source planning system that thinks spatially, reasons contextually, and explains itself clearly. Here’s what we’re working towards.
        </p>

        {/* Map over roadmap items or list them directly */}
        <div className="roadmap-list">
          <RoadmapItem
            title="🧠 AI Reasoning Engine"
            status="Early prototype"
            description={
              <ul className="list-disc list-inside space-y-1">
                <li>Understands and interprets planning policies in plain English</li>
                <li>Highlights discretionary language and contradictions</li>
                <li>Structures outputs as JSON reasoning chains, not just text blurbs</li>
              </ul>
            }
          />
          <RoadmapItem
            title="🗺 Spatial Constraints Engine"
            status="Working demo"
            description={
              <ul className="list-disc list-inside space-y-1">
                <li>Uses GIS data to identify planning constraints (Green Belt, flood zones, heritage, etc.)</li>
                <li>Supports real-time site assessments via map click</li>
                <li>Designed to plug into existing systems or run standalone</li>
              </ul>
            }
          />
          <RoadmapItem
            title="📋 Officer Report Generator"
            status="Planned"
            description={
              <ul className="list-disc list-inside space-y-1">
                <li>Drafts structured, editable planning reports</li>
                <li>Links each recommendation to policies and spatial data</li>
                <li>Designed for planner review, not automated decision-making</li>
              </ul>
            }
          />
           <RoadmapItem
            title="🧾 Local Plan Audit Tool"
            status="In development"
            description={
              <ul className="list-disc list-inside space-y-1">
                  <li>Parses and semantically indexes full Local Plans</li>
                  <li>Flags contradictions, outdated clauses, and missing links to national frameworks</li>
                  <li>Suggests redrafts with reasoning trails</li>
              </ul>
            }
          />
          <RoadmapItem
            title="🧭 Discretionary Decision Support"
            status="R&D phase"
            description={
              <ul className="list-disc list-inside space-y-1">
                <li>Searches past approvals and refusals semantically</li>
                <li>Supports precedent-led argumentation</li>
                <li>Helps planners balance policy intent with on-the-ground realities</li>
              </ul>
            }
          />
          <RoadmapItem
            title="📢 Consultation Analysis"
            status="Planned"
            description={
              <ul className="list-disc list-inside space-y-1">
                <li>Uses NLP to summarise feedback from public consultations</li>
                <li>Detects sentiment, common concerns, and policy alignment</li>
                <li>Bridges the gap between public input and formal reporting</li>
              </ul>
            }
          />
          <RoadmapItem
            title="📊 Scenario Modelling"
            status="Planned"
            description={
              <ul className="list-disc list-inside space-y-1">
                <li>Simulates policy trade-offs (e.g. raising height limits, reducing setbacks)</li>
                <li>Assesses potential impacts on housing supply, infrastructure, and viability</li>
                <li>Designed for iterative, transparent testing by planners and communities</li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureRoadmapSection;