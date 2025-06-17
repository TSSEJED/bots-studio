import { notFound } from 'next/navigation';
import { botPacks } from '@/types/bot-packs';

export function generateStaticParams() {
  return botPacks.map(pack => ({ id: pack.id }));
}

function getPackGradient(id: string) {
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
}

interface PackDetailPageProps {
  params: { id: string };
}

export default function PackDetailPage({ params }: PackDetailPageProps) {
  const pack = botPacks.find((p) => p.id === params.id);
  if (!pack) return notFound();

  const gradient = getPackGradient(pack.id);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className={`relative w-full py-12 px-4 mb-8 bg-gradient-to-r ${gradient} text-white rounded-b-3xl shadow-lg flex flex-col items-center`}>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <svg width="64" height="64" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28" height="28" rx="6" fill="#1F1F1F"/>
                <path d="M14 7L21 14L14 21L7 14L14 7Z" fill="#00AAFF"/>
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-2 drop-shadow-lg">{pack.name}</h1>
            <p className="mb-4 text-lg font-medium opacity-90 max-w-xl text-center drop-shadow">{pack.description}</p>
            <div className="flex flex-col items-center mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-xl bg-black bg-opacity-30 text-3xl font-bold shadow">
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <rect width="28" height="28" rx="6" fill="#1F1F1F"/>
                  <path d="M14 7L21 14L14 21L7 14L14 7Z" fill="#00AAFF"/>
                </svg>
                {pack.priceInRobux.toLocaleString()} <span className="ml-2 text-lg font-semibold">Robux</span>
              </span>
            </div>
            <button className={`mt-2 w-full max-w-xs rounded-lg bg-gradient-to-r ${gradient} px-8 py-3 text-lg font-bold text-white shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-200 transform hover:-translate-y-0.5`}>
              Buy Now
            </button>
          </div>
        </div>
        {/* Features Section */}
        <section className="max-w-3xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white text-center">What’s Included</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pack.features.map((feature, idx) => (
              <li key={idx} className="flex items-start bg-white dark:bg-gray-800 rounded-xl shadow p-4">
                <svg className="h-6 w-6 flex-shrink-0 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="ml-4 text-gray-900 dark:text-gray-200 text-base font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer className="w-full bg-gray-900 text-gray-200 py-6 mt-auto text-center text-sm shadow-inner">
        &copy; {new Date().getFullYear()} Bots Studio. All rights reserved.
      </footer>
    </div>
  );
}
