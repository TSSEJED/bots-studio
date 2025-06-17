import BotPackCard from '@/components/BotPackCard';
import { botPacks } from '@/types/bot-packs';

export default function PacksPage() {
  return (
    <div>
      <div className="text-center py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
          Choose Your Bot Pack
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-300">
          Select the perfect pack for your server{'\''}s needs
        </p>
      </div>
      
      <div className="mt-12 grid gap-8 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        {botPacks.map((pack) => (
          <BotPackCard key={pack.id} pack={pack} />
        ))}
      </div>
    </div>
  );
}
