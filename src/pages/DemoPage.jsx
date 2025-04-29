import React from 'react';
import { Link } from 'react-router-dom';

function DemoPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-center">Demo</h1>
      <p className="text-center text-xl text-highlight mb-12">See The Planner's Assistant in Action (Conceptual)</p>

      <section className="text-center">
        <p>Placeholder: This page will host a live demo, an embedded video, or a gallery of screenshots showcasing the tool's functionality.</p>

        <div className="mt-8 bg-gray-200 p-10 rounded-lg border border-gray-300 max-w-4xl mx-auto">
          <h3 className="!mt-0">Live Demo / Video Embed Area</h3>
          <p className="text-gray-600">(Content to be added)</p>
          {/* Example: <iframe width="560" height="315" src="[Your Demo Video URL]"...></iframe> */}
          {/* Example: Link to a deployed demo instance */}
          {/* <a href="[Link to Live Demo]" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">Try the Live Demo</a> */}
        </div>

        <div className="mt-12">
          <h2>Key Features Illustrated</h2>
          <p>Placeholder: Briefly list what the demo showcases.</p>
          <ul className="inline-block text-left mt-4">
             <li>Policy search and retrieval.</li>
             <li>Spatial constraint analysis overlay.</li>
             <li>AI-assisted assessment drafting.</li>
             <li>Explainability features.</li>
          </ul>
        </div>
         <p className="mt-10">
            For technical details, please visit the <Link to="/tech" className="font-semibold hover:underline">Technology page</Link>.
        </p>
      </section>
    </div>
  );
}

export default DemoPage;