import React from 'react';

function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl text-center">
      <h1>Get in Touch</h1>
      <p className="text-xl text-highlight mb-8">We'd love to hear from you!</p>

      <p className="mb-6">
        Whether you're a planner with feedback, a developer interested in contributing,
        or just curious about the project, feel free to reach out.
      </p>

      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 inline-block">
        <h3 className="!mt-0">Contact Information</h3>
        <p className="mt-4">
          <strong>General Inquiries & Collaboration:</strong><br />
          <a href="mailto:hello@theplannersassistant.uk" className="text-lg text-highlight hover:underline">
            hello@theplannersassistant.uk
          </a>
        </p>
        <p className="mt-6">
          <strong>Technical Issues & Contributions:</strong><br />
          Please use the{' '}
          <a
            href="https://github.com/the-planners-assistant/issues" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-highlight hover:underline"
          >
            GitHub Issues Tracker
          </a>
        </p>
         {/* Optional: Add a simple contact form later if needed */}
         {/* <p className="mt-6 text-sm text-gray-600">(Contact form coming soon)</p> */}
      </div>

       <p className="mt-10">
           You can also follow project updates or join discussions on our {' '}
           <a href="https://github.com/the-planners-assistant" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">GitHub Repository</a>.
       </p>
    </div>
  );
}

export default ContactPage;