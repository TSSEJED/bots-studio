export default function FAQPage() {
  const faqs = [
    {
      question: "What types of bots and add-ons do you offer?",
      answer: "We provide a wide range of customizable Discord bot add-ons including moderation tools, XP systems, giveaways, shop systems, custom commands, and more to enhance your server experience."
    },
    {
      question: "How do I purchase an add-on?",
      answer: "You can contact us directly through our Discord server or website to place your order. Payments are accepted exclusively in Robux."
    },
    {
      question: "Can I request a custom bot or add-on?",
      answer: "Yes! We welcome custom requests tailored to your specific needs. Reach out to us via ticket or direct message to discuss your requirements."
    },
    {
      question: "How is support handled?",
      answer: "Support is available through our Discord ticket system. Open a ticket in the #ticket-support channel for help with setup, issues, or inquiries."
    },
    {
      question: "How do I install and set up the bots?",
      answer: "We provide detailed setup guides and documentation with each add-on. Our support team can also assist you during installation."
    },
    {
      question: "Are updates and maintenance included?",
      answer: "Yes, all purchased add-ons receive regular updates and maintenance to ensure compatibility and performance."
    },
    {
      question: "Can I cancel or get a refund?",
      answer: "Please review our refund policy on the website or contact support. Refunds are handled case-by-case based on purchase terms."
    },
    {
      question: "Is my data safe?",
      answer: "We take privacy seriously. All data handling complies with our Privacy Policy, which you can review on our website."
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ❓ Frequently Asked Questions
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
              <h2 className="text-xl font-semibold text-indigo-600 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-700">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Still have questions? Our team is here to help!
          </p>
          <a
            href="https://discord.gg/nyQZbutWeH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow-md"
          >
            Contact Support on Discord
          </a>
        </div>
      </div>
    </div>
  );
}
