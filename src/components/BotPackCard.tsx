'use client';

import Link from 'next/link';
import { BotPack } from '@/types/bot-packs';

interface BotPackCardProps {
  pack: BotPack;
}

const getPackGradient = (id: string) => {
  switch (id) {
    case 'basic':
      return 'from-blue-500 to-blue-600';
    case 'moderation':
      return 'from-yellow-500 to-orange-500';
    case 'community':
      return 'from-purple-500 to-indigo-600';
    case 'events':
      return 'from-pink-500 to-red-500';
    case 'ultimate':
      return 'from-emerald-500 to-teal-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const BotPackCard: React.FC<BotPackCardProps> = ({ pack }) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
      {/* Header with gradient */}
      <div className={`h-2 bg-gradient-to-r ${getPackGradient(pack.id)}`} />
      {/* Main content */}
      <div className="flex-1 p-6 sm:p-8">
        <div className="flex items-center justify-between">
          {pack.popular && (
            <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200">
              Most Popular
            </span>
          )}
        </div>
        
        <div className="mt-6">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {pack.name}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {pack.description}
          </p>
          
          <div className="mt-6">
  <p className="text-4xl font-bold text-robux-green dark:text-robux-green flex items-center">
    <span className="inline-block mr-2">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="6" fill="#1F1F1F"/>
        <path d="M14 7L21 14L14 21L7 14L14 7Z" fill="#00AAFF"/>
      </svg>
    </span>
    {pack.priceInRobux.toLocaleString()} <span className="ml-2 text-xl font-semibold">Robux</span>
  </p>
</div>
          
          <ul className="mt-8 space-y-3">
            {pack.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="h-5 w-5 flex-shrink-0 text-green-500 mt-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
                <span className="ml-3 text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Footer with CTA */}
      <div className="border-t border-gray-200 bg-gray-50 p-6 dark:border-gray-700/50 dark:bg-gray-800/50">
        <a
            href="https://discord.gg/nyQZbutWeHH"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full rounded-lg bg-gradient-to-r ${getPackGradient(pack.id)} px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-0.5 text-center block mt-6`}
          >
            Get {pack.name}
          </a>
        
        {pack.priceInRobux && (
          <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
            <svg 
              className="mr-1 -mt-0.5 inline-block h-4 w-4 text-green-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
            Instant delivery after purchase
          </p>
        )}
      </div>
    </div>
  );
};

export default BotPackCard;
