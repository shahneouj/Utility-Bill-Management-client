export default function PrivacyPolicy() {
  return (
    <div className="bg-base-200 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-sm text-gray-500 mb-6">
              Last updated: January 2026
            </p>

            <p className="mb-4">
              <strong>Your Website Name</strong> values your privacy. This policy
              explains how we collect, use, and protect your information.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Name, email, phone number</li>
              <li>Account and login information</li>
              <li>Usage and analytics data</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              2. How We Use Information
            </h2>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Provide and improve services</li>
              <li>Customer support</li>
              <li>Security and fraud prevention</li>
              <li>Communication and updates</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              3. Data Security
            </h2>
            <p className="mb-4">
              We use industry-standard security measures to protect your personal
              data from unauthorized access.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              4. Cookies
            </h2>
            <p className="mb-4">
              We use cookies to enhance user experience and analyze traffic. You
              can disable cookies in your browser settings.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              5. Third-Party Services
            </h2>
            <p className="mb-4">
              We may share data with trusted third-party services only to operate
              and improve our platform.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              6. Policy Updates
            </h2>
            <p className="mb-4">
              This policy may be updated occasionally. Continued use of the
              service indicates acceptance of the changes.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
              7. Contact
            </h2>
            <p>
              For privacy-related questions, contact us at{" "}
              <span className="font-medium">
                privacy@yourwebsite.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
