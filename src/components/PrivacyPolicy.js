import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how Free2PDF collects, uses, and protects your information when you use our services.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside">
          <li>Uploaded files for conversion (temporarily stored)</li>
          <li>Basic usage data (e.g., device type, browser)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
        <p>
          We use the information to provide file conversion services and improve our platform’s performance and usability.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. File Storage</h2>
        <p>
          Uploaded files are automatically deleted after conversion or within a short period. We do not permanently store your files.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Cookies</h2>
        <p>
          We use cookies for basic analytics to enhance user experience. No personal data is stored in cookies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Data Sharing</h2>
        <p>
          We do not sell or share your personal information with third parties, except as required by law.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Changes to Policy</h2>
        <p>
          We may update this policy occasionally. Updates will be posted on this page with a new effective date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
        <p>
          If you have any questions about this policy, please contact us at <strong>privacy@free2pdf.com</strong>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
