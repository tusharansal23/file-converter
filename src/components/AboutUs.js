import React from 'react';

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">About Us</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Journey Begins</h2>
        <p className="text-lg leading-relaxed">
          <strong>Free2PDF</strong> was founded with a simple yet powerful idea by <strong>Tushar Ansal</strong> — to make file conversion effortless, fast, and accessible to everyone. 
          What started as a small utility project evolved into a platform helping thousands of users convert files without unnecessary complications, hidden costs, or spammy ads.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          From PDF to JPG, DOCX to HTML, or MP4 to AVI — Free2PDF is designed to help students, professionals, and businesses save time and boost productivity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Founder’s Note</h2>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
          “Free2PDF is more than just a file converter. It’s a reflection of the problems I faced when I needed a simple tool that just worked.
          No fluff, no paywalls, no gimmicks. Just pure utility.” <br />
          — <strong>Tushar Ansal</strong>, Founder
        </blockquote>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
        <p className="text-lg leading-relaxed">
          To become the world’s most user-friendly and reliable file conversion platform, empowering individuals and businesses alike 
          by simplifying digital workflows and adding true value to people’s lives.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li>Provide <strong>free, secure, and fast</strong> file conversion tools that work across platforms.</li>
          <li>Create a <strong>seamless user experience</strong> by removing friction.</li>
          <li>Continuously <strong>innovate</strong> with new tools and technologies.</li>
          <li>Put <strong>users first</strong> by ensuring privacy, speed, and simplicity.</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What’s Next?</h2>
        <p className="text-lg leading-relaxed mb-2">
          We're actively working on expanding our offerings with:
        </p>
        <ul className="list-disc list-inside text-lg leading-relaxed">
          <li><strong>OCR tools</strong> and <strong>PDF compression</strong></li>
          <li><strong>AI-based document editing</strong></li>
          <li><strong>Cloud syncing</strong> for access anytime</li>
          <li><strong>Mobile app</strong> for on-the-go conversions</li>
          <li><strong>Multi-language support</strong> for global reach</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Join Us on Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Whether you’re a student rushing to meet deadlines, a teacher sharing resources, a designer converting assets, or just someone trying to make sense of file formats — Free2PDF is here for you.
          <br /><br />
          Welcome to the future of simple file conversion.<br />
          Welcome to <strong>Free2PDF</strong>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
