import React from 'react';

const WhyItMattersSection: React.FC = () => {
  return (
    <section id="why-it-matters" className="why-matters-section py-12 px-4"> {/* Example placeholder classes */}
       <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-deep-navy mb-4 text-center">
          ⚖️ Why This Matters
        </h2>
        <p className="text-lg mb-8 text-center">
            Planning decisions shape lives. But the systems that support them are fragmented, slow, and often opaque.
            The Planner’s Assistant is designed to tackle what actually makes planning tech hard—not just coding, but:
        </p>

        <div className="space-y-6"> {/* Container for the points */}
            <div>
                <h4 className="text-xl font-semibold text-deep-navy mb-1">Data that wasn’t made to be read by machines</h4>
                <p className="text-lg">Planning policies live in PDFs, inconsistent schemas, and human judgement. We’re building tools that don’t just parse them—they reason through them, semantically and spatially.</p>
            </div>
            <div>
                <h4 className="text-xl font-semibold text-deep-navy mb-1">AI that needs to explain itself</h4>
                <p className="text-lg mb-2">Fluent AI isn’t enough. We need models that can:</p>
                 <ul className="list-disc list-inside space-y-1 text-lg ml-4">
                    <li>Link outputs back to actual policies</li>
                    <li>Flag when they’re uncertain</li>
                    <li>Suggest—but never enforce—decisions</li>
                 </ul>
            </div>
             <div>
                <h4 className="text-xl font-semibold text-deep-navy mb-1">Costs that shut out experimentation</h4>
                <p className="text-lg">Running LLMs isn’t cheap. We’re designing for a future where models can be hosted locally or affordably, without dependency on closed APIs.</p>
            </div>
             <div>
                <h4 className="text-xl font-semibold text-deep-navy mb-1">Tech that supports planning, not replaces it</h4>
                <p className="text-lg">This isn’t about automating planners out of the loop. It’s about removing repetitive work, highlighting hidden trade-offs, and giving decision-makers tools they can actually trust.</p>
            </div>
        </div>

         <p className="text-lg italic mt-8 text-center">
             We’re not chasing hype. We’re building carefully, out in the open, and with a bias toward public good. If you believe AI should serve housing, cities, and fairness—not extract from them—this is your invitation.
         </p>

      </div>
    </section>
  );
};

export default WhyItMattersSection;