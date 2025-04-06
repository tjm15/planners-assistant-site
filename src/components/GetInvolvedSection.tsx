import React from 'react';

const GetInvolvedSection: React.FC = () => {
  // Replace placeholders with actual links/info
  const contactEmail = "your-email-alias@example.com";
  const contactFormLink = "/contact"; // Or external link

  return (
    <section id="get-involved" className="get-involved-section py-12 px-4 bg-deep-navy text-white"> {/* Example classes */}
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-4">
          🤝 Get Involved
        </h2>
        <p className="text-lg mb-6">
          The Planner’s Assistant is in active development—and we’re inviting collaborators to help shape it.
        </p>
        <p className="text-lg mb-6">
            We're building a tool to support planning decisions with spatial awareness, AI reasoning, and open data principles. The prototype works. The roadmap is ambitious. Now we're looking for people who want to build something meaningful, not just something clever.
        </p>

        <h3 className="text-2xl font-semibold mb-3">
           👋 We’re looking for:
        </h3>
        <ul className="list-disc list-inside inline-block text-left space-y-1 text-lg mb-8">
            <li>Developers (Python, FastAPI, React, PostGIS, Qdrant)</li>
            <li>Planners, researchers, and urbanists who want to test, critique, or steer the work</li>
            <li>Civic tech allies who believe planning should be open, explainable, and public-serving</li>
        </ul>

         <p className="text-lg mb-8 italic">
           This isn’t a startup pitch or a polished product—it’s an open invitation to join a project that’s trying to do something useful, careful, and public-first. No experience with planning tech required. Just curiosity and shared intent.
        </p>


         <h3 className="text-2xl font-semibold mb-4">
           📨 Want to chat?
         </h3>
          {/* Consider layout for contact options */}
         <div className="contact-options space-y-4">
            <p className="text-lg">
                Reach out via <a href={`mailto:${contactEmail}`} className="underline text-planning-gold hover:text-yellow-300">{contactEmail}</a>
                {contactFormLink && ` or use the contact form.` /* Conditionally add form link text */}
                {/* Conditionally render form link if it exists */}
                {/* {contactFormLink && <a href={contactFormLink} className="underline text-planning-gold hover:text-yellow-300"> contact form</a>} */}
            </p>
            {/* Example QR Code - uncomment and style if used */}
            {/* <div className="qr-code mt-4">
                 <img src={qrCodeImagePath} alt="QR Code for more info" className="mx-auto w-32 h-32" />
                 <p className="text-sm mt-2">Or scan the QR code at the hackathon to explore more</p>
            </div> */}
         </div>

      </div>
    </section>
  );
};

export default GetInvolvedSection;