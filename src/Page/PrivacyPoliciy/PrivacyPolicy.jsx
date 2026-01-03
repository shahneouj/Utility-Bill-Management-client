export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

          <p className="mb-4">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information.
          </p>

          <h2 className="text-xl font-semibold mt-4">Information We Collect</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Personal information (name, email)</li>
            <li>Billing and payment information</li>
            <li>Usage and transaction history</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">How We Use Information</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>To process bill payments</li>
            <li>To show billing history</li>
            <li>To improve our services</li>
          </ul>

          <h2 className="text-xl font-semibold mt-4">Security</h2>
          <p className="mb-4">
            We use industry-standard security measures to protect your data.
          </p>

          <h2 className="text-xl font-semibold mt-4">Contact</h2>
          <p>
            If you have questions about this policy, please contact our support
            team.
          </p>
        </div>
      </div>
    </div>
  );
}
