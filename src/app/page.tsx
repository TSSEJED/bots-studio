'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Schema.org markup */}
      <section 
        className="py-20 bg-gradient-to-b from-white to-gray-50"
        itemScope 
        itemType="https://schema.org/WebApplication"
      >
        <meta itemProp="applicationCategory" content="BusinessApplication" />
        <meta itemProp="operatingSystem" content="Web Browser" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl" itemProp="name">
              <span className="block">Premium Discord Bots</span>
              <span className="block text-indigo-600">Enhance Your Server Today</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600" itemProp="description">
              Boost engagement and streamline moderation with our premium Discord bot packs. Easy to install, fully customizable, and trusted by thousands of communities worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/packs/">
                className="px-8 py-4 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                View Packs
              </Link>
              <Link href="#features">
                className="px-8 py-4 text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Schema.org */}
      <div className="py-12 bg-white" itemScope itemType="https://schema.org/ItemList">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Why Choose Us</h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Premium Discord Bot Solutions
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
              Our bots are designed to help you build, manage, and grow your Discord community with powerful features.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Easy 1-Click Setup',
                  description: 'Get your bot up and running in minutes with our intuitive setup process and step-by-step guides. Perfect for both beginners and experienced server owners.',
                  icon: '🚀',
                },
                {
                  name: '24/7 Support',
                  description: 'Our team is always here to help you with any questions or issues you might have.',
                  icon: '🛟',
                },
                {
                  name: 'Regular Updates',
                  description: 'We constantly update our bots with new features and improvements.',
                  icon: '🔄',
                },
              ].map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root bg-gray-50 dark:bg-gray-700 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-2xl">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-white tracking-tight">
                        {feature.name}
                      </h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to enhance your server?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of communities already using our bot packs.
          </p>
          <Link href="/packs/">
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
