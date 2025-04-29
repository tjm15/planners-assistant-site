import React from 'react';
import { Link } from 'react-router-dom';

function LedgerPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-center">The Spatial Ledger Project</h1>
      <p className="text-center text-xl text-highlight mb-12">Exploring Systemic Insights from Planning Data</p>

      <section>
        <h2>Introduction</h2>
        <p>Placeholder: Briefly explain the concept of The Spatial Ledger. What is it? What problem does it aim to solve?</p>
        <p>The Spatial Ledger is a conceptual sister project or future research direction related to The Planner's Assistant. While the Assistant focuses on individual decision support, the Ledger explores how we might securely and transparently record planning decisions and their spatial context over time.</p>
        <p>The goal is to create a verifiable, append-only record of planning outcomes, potentially using distributed ledger or blockchain-inspired technologies, to enable better analysis of planning trends, policy effectiveness, and cumulative impacts across different areas and time periods.</p>
      </section>

      <section>
        <h2>Potential Benefits</h2>
        <p>Placeholder: Outline the potential advantages of such a system.</p>
        <ul>
          <li>Enhanced transparency and auditability of planning decisions.</li>
          <li>Improved data for analysing long-term planning trends and policy impacts.</li>
          <li>Potential for cross-authority learning and benchmarking.</li>
          <li>Foundation for future smart contracts or automated compliance checks in planning.</li>
        </ul>
      </section>

      <section>
        <h2>Current Status</h2>
        <p>Placeholder: Clarify that this is likely an early-stage idea or research area.</p>
        <p>This concept is currently in the exploratory and research phase. It is not an actively developed component of The Planner's Assistant prototype but represents a long-term vision for leveraging planning data for systemic insights.</p>
         <p className="mt-6">We are interested in discussing this concept further with interested parties. Please <Link to="/contact" className="font-semibold hover:underline">get in touch</Link> if you have ideas or expertise in this area.</p>
      </section>
    </div>
  );
}

export default LedgerPage;