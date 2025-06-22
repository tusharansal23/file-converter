import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Terms and Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>
          By using Free2PDF, you agree to comply with and be legally bound by these Terms and Conditions. If you do not agree, please do not use the service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Description of Service</h2>
        <p>
          Free2PDF offers free file conversion services including image, document, audio, and video format conversions. All services are provided "as-is" with no guarantees of accuracy or reliability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>You are responsible for the content you upload.</li>
          <li>You must not upload illegal, harmful, or copyrighted content without permission.</li>
          <li>Do not use the platform to host or distribute malware or spam.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. File Deletion Policy</h2>
        <p>
          We do not store files after conversion. All files are deleted automatically after the process is complete or after a short retention period.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
        <p>
          All content on the Free2PDF website including branding, text, and software is owned by Free2PDF and may not be used without written permission.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Limitation of Liability</h2>
        <p>
          Free2PDF is not responsible for any loss, damage, or data corruption resulting from the use of our services. Use at your own risk.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
        <p>
          We may update these terms at any time. Continued use of the platform means you accept any updates or changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
        <p>
          If you have any questions or concerns, please contact us at support@free2pdf.com.
        </p>
      </section>
    </div>
  );
};

export default Terms;
