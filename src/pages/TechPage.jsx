import React from 'react';
import { Link } from 'react-router-dom'; // <--- ADD THIS LINE


function TechPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-center">Technology & Contribution</h1>
      <p className="text-center text-xl text-highlight mb-12">Building transparent and open planning tools together.</p>

      <section>
        <h2>Tech Stack Overview</h2>
        <p>Placeholder: Detail the core technologies used in the project. Be specific but accessible.</p>
        <ul>
          <li><strong>Frontend:</strong> React (Vite), Tailwind CSS, React Router</li>
          <li><strong>Backend:</strong> Python (FastAPI)</li>
          <li><strong>AI/ML:</strong> [Mention specific libraries/models, e.g., spaCy, Transformers, Langchain, specific LLMs if applicable]</li>
          <li><strong>Vector Database:</strong> Qdrant (for semantic search/policy indexing)</li>
          <li><strong>Spatial:</strong> PostGIS/PostgreSQL, GeoPandas, Shapely</li>
          <li><strong>Infrastructure:</strong> [Mention Docker if used, cloud provider if relevant - though deployment excluded for now]</li>
        </ul>
      </section>

      <section>
        <h2>GitHub Repository</h2>
        <p>Placeholder: Provide a clear link to the main GitHub repository. Briefly explain the repo structure or key folders.</p>
        <p className="mt-4">
          The project is fully open-source. You can find the code, issues, and discussions on GitHub:
        </p>
        <a
          href="https://github.com/the-planners-assistant" // Replace with actual URL
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary mt-2 inline-flex items-center space-x-2"
        >
           {/* Simple Github Icon SVG */}
           <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
           <span>View on GitHub</span>
        </a>
      </section>

      <section>
        <h2>Contribution Invitation</h2>
        <p>Placeholder: Explain how people can contribute (e.g., reporting bugs, suggesting features, submitting pull requests, improving documentation). Link to a `CONTRIBUTING.md` file in the repo if available.</p>
        <p>We welcome contributions from developers, designers, data scientists, and domain experts! Here’s how you can get involved:</p>
        <ul>
          <li>Check out the open issues on GitHub, especially those tagged 'good first issue'.</li>
          <li>Suggest new features or improvements by opening an issue.</li>
          <li>Help improve documentation or write tutorials.</li>
          <li>Submit pull requests with bug fixes or new features (please read our contribution guidelines first!).</li>
        </ul>
         {/* Link to CONTRIBUTING.md if it exists */}
         {/* <p>Please review our <a href="[Link to CONTRIBUTING.md]" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Contribution Guidelines</a> before submitting code.</p> */}
      </section>

      <section>
        <h2>Development Roadmap</h2>
        <p>Placeholder: Outline the future plans for the project. Could be high-level phases or specific upcoming features.</p>
        <div className="space-y-6">
            <div>
                <h4 className="border-b-2 border-highlight inline-block pb-1 !mt-0">Near-Term (Next 3-6 Months)</h4>
                <ul className="mt-2">
                    <li>Feature/Goal A (e.g., Improve policy parsing accuracy)</li>
                    <li>Feature/Goal B (e.g., Add module for [Specific Planning Task])</li>
                    <li>Feature/Goal C (e.g., Refine user interface based on feedback)</li>
                </ul>
            </div>
            <div>
                <h4 className="border-b-2 border-highlight inline-block pb-1">Mid-Term (6-12 Months)</h4>
                 <ul className="mt-2">
                    <li>Feature/Goal D (e.g., Integrate [Another Data Source])</li>
                    <li>Feature/Goal E (e.g., Develop initial explainability dashboard)</li>
                </ul>
            </div>
             <div>
                <h4 className="border-b-2 border-highlight inline-block pb-1">Long-Term Vision</h4>
                 <ul className="mt-2">
                    <li>Goal F (e.g., Explore self-hosting options for LAs)</li>
                    <li>Goal G (e.g., Expand tooling for [Broader Planning Area])</li>
                    <li>See also: <Link to="/ledger" className="font-semibold hover:underline">The Spatial Ledger Project</Link></li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  );
}

export default TechPage;