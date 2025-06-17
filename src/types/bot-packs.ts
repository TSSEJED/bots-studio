export type BotPack = {
  id: string;
  name: string;
  description: string;
  priceInRobux: number;
  features: string[];
  popular?: boolean;
};

export const botPacks: BotPack[] = [
  {
    id: 'basic',
    name: 'BASIC PACK',
    description: 'Core features for any server',
    priceInRobux: 495,
    features: [
      'Core commands: !ping, !help, !embed, !botinfo, !serverinfo',
      'Optional: Custom status & Branding removed (+135 Robux)',
    ],
  },
  {
    id: 'moderation',
    name: 'MODERATION PACK',
    description: 'Moderation tools & anti-spam',
    priceInRobux: 1345,
    features: [
      'Includes BASIC',
      'Kick / Ban / Mute / Warn',
      'Moderation logs',
      'Anti-spam system',
      'Optional: Custom status & Branding removed (+135 Robux)',
    ],
  },
  {
    id: 'community',
    name: 'COMMUNITY PACK',
    description: 'Community engagement tools',
    priceInRobux: 1650,
    features: [
      'Includes BASIC',
      'XP levels (auto role every 100 messages)',
      'Auto-role on join',
      '/say command with embed builder',
      'Create your own custom commands',
      'Custom status',
      'Branding removed',
    ],
  },
  {
    id: 'events',
    name: 'EVENTS PACK',
    description: 'Event and giveaway features',
    priceInRobux: 1895,
    features: [
      'Includes BASIC',
      'Emoji giveaways with auto-winner',
      'Dropdown shop (buyable roles/items)',
      'XP system + event logging',
      'Custom status',
      'Branding removed',
    ],
  },
  {
    id: 'ultimate',
    name: 'ULTIMATE PACK',
    description: 'All features, no branding',
    priceInRobux: 3495,
    features: [
      'All features from all packs',
      'Full logging system',
      'Toggle systems & cleaner setup',
      '100% no branding',
      'Best choice for growing servers',
      'Custom status',
      'Branding removed',
    ],
  },
];
