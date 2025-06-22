import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have questions, feedback, or need support? We’d love to hear from you. Reach out to us using the form or details below.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Email</h2>
        <p className="text-gray-600">support@free2pdf.com</p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Business Inquiries</h2>
        <p className="text-gray-600">partnerships@free2pdf.com</p>
      </div>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Your Name</label>
          <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="John Doe" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Your Email</label>
          <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea rows="5" className="w-full border border-gray-300 rounded-lg px-4 py-2" placeholder="Write your message here..." />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
