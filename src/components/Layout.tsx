'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DisableRightClick from './DisableRightClick';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packs', href: '/packs' },
    { name: 'Rules', href: '/rules' },
    { name: 'Terms', href: '/terms' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DisableRightClick />
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  Bots Studio
                </span>
              </Link>
              <nav className="hidden sm:ml-10 sm:flex sm:space-x-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-200'
                          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://discord.gg/nyQZbutWeH"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                Join Our Discord
              </a>
              <Link
                href="/packs"
                className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex space-x-6">
              <Link href="/rules" className="text-gray-500 hover:text-gray-600 transition-colors duration-200">
                Server Rules
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-gray-600 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/faq" className="text-gray-500 hover:text-gray-600 transition-colors duration-200">
                FAQ
              </Link>
              <a 
                href="https://discord.gg/nyQZbutWeH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-600 transition-colors duration-200"
              >
                Discord Server
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 md:mt-0">
              &copy; {new Date().getFullYear()} Bots Studio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
