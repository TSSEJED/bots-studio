import Link from 'next/link';

export default function RulesPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            📜 Server Rules
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            What You Need to Know
          </p>
        </div>

        <div className="mt-10 space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Be Respectful</h2>
            <p className="text-gray-700">
              Treat everyone with kindness and respect. No bullying, harassment, hate speech, or discrimination will be tolerated.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. No Spamming or Flooding</h2>
            <p className="text-gray-700">
              Avoid sending repetitive messages, excessive emojis, or irrelevant content that disrupts conversations.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Stay On Topic</h2>
            <p className="text-gray-700">
              Use channels appropriately and keep discussions relevant to each channel{'\''}s purpose.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. No Self-Promotion or Advertising Without Permission</h2>
            <p className="text-gray-700">
              Do not promote your projects, servers, or services unless you have staff approval.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Follow Discord{'\''}s Terms of Service</h2>
            <p className="text-gray-700">
              Any illegal activity or violation of Discord{'\''}s rules is strictly forbidden.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Protect Privacy</h2>
            <p className="text-gray-700">
              Do not share anyone{'\''}s personal or private information without consent.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Use the Designated Language</h2>
            <p className="text-gray-700">
              Please communicate in the server{'\''}s main language to ensure clear and inclusive communication.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Respect Moderators and Staff</h2>
            <p className="text-gray-700">
              Follow the directions of moderators and admins. If you have issues, contact them respectfully via proper channels.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. No NSFW or Inappropriate Content</h2>
            <p className="text-gray-700">
              Keep the server safe and family-friendly. Sharing explicit or inappropriate material is prohibited.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. No Evading Punishments</h2>
            <p className="text-gray-700">
              Avoid trying to bypass mutes, bans, or other moderation actions; doing so may lead to harsher penalties.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Use Tickets for Support</h2>
            <p className="text-gray-700">
              For help or reporting issues, open a ticket in the designated channel. Do not spam moderators.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Keep Username and Profile Appropriate</h2>
            <p className="text-gray-700">
              Ensure your username, nickname, and profile picture are respectful and follow server guidelines.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link 
            href="https://discord.gg/nyQZbutWeH" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Join Our Discord Server
          </Link>
        </div>
      </div>
    </div>
  );
}
