import React from 'react';


function PlannersPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-center">Empowering Urban Planners</h1>
      <p className="text-center text-xl text-highlight mb-12">Tools designed to support, not replace, your expertise.</p>

      <section>
        <h2>Benefits for Planners</h2>
        <p>Placeholder: Describe how the tool helps planners (e.g., faster policy checks, easier spatial analysis integration, reduced repetitive tasks, clearer report generation).</p>
        <ul>
          <li>Benefit 1: Faster access to relevant policies.</li>
          <li>Benefit 2: Integrated spatial constraint checks.</li>
          <li>Benefit 3: Assistance with drafting initial assessments.</li>
          <li>Benefit 4: Improved consistency in applying rules.</li>
        </ul>
      </section>

      <section>
        <h2>Visuals & Workflow</h2>
        <p>Placeholder: Include screenshots, diagrams, or mockups showing the tool in action. Explain the typical user workflow.</p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-300 h-64 rounded flex items-center justify-center text-gray-500">Placeholder Visual 1 (e.g., Map Interface)</div>
          <div className="bg-gray-300 h-64 rounded flex items-center justify-center text-gray-500">Placeholder Visual 2 (e.g., Policy Excerpt)</div>
          <div className="bg-gray-300 h-64 rounded flex items-center justify-center text-gray-500">Placeholder Visual 3 (e.g., Report Snippet)</div>
          <div className="bg-gray-300 h-64 rounded flex items-center justify-center text-gray-500">Placeholder Visual 4 (e.g., Explainability)</div>
        </div>
      </section>

      <section>
        <h2>Explainability & Trust</h2>
        <p>Placeholder: Emphasize the commitment to transparency. Explain how the tool shows its reasoning, links back to source documents (policy, data), and flags uncertainty. Reassure planners that they remain in control of the final decision.</p>
        <p>Our commitment:</p>
        <ul>
            <li>Traceable outputs back to source data and policy sections.</li>
            <li>Clear indication of confidence levels or ambiguities.</li>
            <li>Designed for review and override by planning professionals.</li>
        </ul>
      </section>

       <section className="text-center mt-16">
          <a href="/contact" className="btn btn-primary">Have Questions? Get in Touch</a>
       </section>
    </div>
  );
}

export default PlannersPage;