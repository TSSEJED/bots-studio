export default function TermsPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            📜 Terms of Service
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Welcome to our community. By using our services, you agree to the following terms:
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing or using our services, you agree to comply with these Terms of Service and all applicable laws.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">2. User Conduct</h2>
            <p className="text-gray-700">
              You agree to behave respectfully and not engage in harassment, hate speech, spamming, or any illegal activities.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">3. Content</h2>
            <p className="text-gray-700">
              You are responsible for the content you share. Do not post content that violates intellectual property rights or is offensive, defamatory, or illegal.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">4. Moderation</h2>
            <p className="text-gray-700">
              We reserve the right to remove content, warn, mute, or ban users who violate the rules or Terms of Service.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">5. Privacy</h2>
            <p className="text-gray-700">
              Your personal data will be handled according to our Privacy Policy.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">6. Limitation of Liability</h2>
            <p className="text-gray-700">
              We are not responsible for any damages or losses resulting from your use of our services.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">7. Changes to Terms</h2>
            <p className="text-gray-700">
              We may update these Terms at any time. Continued use of the service implies acceptance of the updated Terms.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b pb-2">8. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to terminate or suspend your access for violations of these Terms.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms, please contact us.
          </p>
          <a
            href="https://discord.gg/nyQZbutWeH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Contact Us on Discord
          </a>
        </div>
      </div>
    </div>
  );
}
