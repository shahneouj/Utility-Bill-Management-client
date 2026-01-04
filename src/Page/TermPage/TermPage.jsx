import React from 'react';

const TermPage = () => {
  return (
    <div className="bg-base-300 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Terms & Conditions</h1>
            <p className="text-sm text-gray-500 mb-6">
              Last updated: January 2026
            </p>

            <p className="mb-4">
              Welcome to <strong>Your Website Name</strong>. By accessing or using
              our services, you agree to be bound by these Terms & Conditions.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              1. Use of Services
            </h2>
            <p className="mb-4">
              You agree to use this website only for lawful purposes and in
              compliance with all applicable laws.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              2. User Accounts
            </h2>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your
              account and all activities under your account.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              3. Intellectual Property
            </h2>
            <p className="mb-4">
              All content, logos, text, and designs are the property of
              <strong> Your Website Name</strong>.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              4. Prohibited Activities
            </h2>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Illegal use of the platform</li>
              <li>Unauthorized access or hacking</li>
              <li>Uploading malicious content</li>
              <li>Violating other users’ rights</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              5. Termination
            </h2>
            <p className="mb-4">
              We may suspend or terminate your access at any time if you violate
              these terms.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              6. Limitation of Liability
            </h2>
            <p className="mb-4">
              We are not liable for any indirect or consequential damages arising
              from the use of our services.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              7. Contact Us
            </h2>
            <p>
              If you have any questions, contact us at{" "}
              <span className="font-medium">
                support@yourwebsite.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermPage;