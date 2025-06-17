import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          Oops! Page not found
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 hover:shadow-md"
          >
            Go back home
          </Link>
          <a
            href="https://discord.gg/nyQZbutWeH"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
          >
            Get Help on Discord
          </a>
        </div>
      </div>
      
      <div className="mt-16">
        <p className="text-gray-500">
          Looking for something specific? Check out our{' '}
          <Link href="/faq" className="text-indigo-600 hover:text-indigo-500 font-medium">
            FAQ page
          </Link>
        </p>
      </div>
    </div>
  );
}
