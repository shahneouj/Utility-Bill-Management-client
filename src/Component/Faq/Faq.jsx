const faqs = [
  {
    question: "How can I view my utility bills?",
    answer:
      "You can view all your utility bills from the Bills or My Bills page after logging in.",
  },
  {
    question: "How do I pay my bills?",
    answer:
      "Open a bill, click Pay Bill, choose your payment method, and confirm.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use industry-standard encryption and secure payment gateways.",
  },
  {
    question: "Can I download my bill?",
    answer:
      "Yes, bills can be downloaded or printed from the bill details page.",
  },
];

const FAQ = () => {
  return (
    <div className="max-w-4xl mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-base-100 border border-base-300"
          >
            {/* ✅ checkbox FIX */}
            <input type="checkbox" />

            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>

            <div className="collapse-content text-base-content/80">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
