export type SponsorItem = {
  name: string;
  label: string;
  accent: string;
  mark: string;
  markClassName: string;
};

export type SponsorTier = {
  tier: string;
  tone: string;
  sponsors: SponsorItem[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    tier: 'Platinum Sponsors',
    tone: 'from-[#FFF0BC] to-[#F6D88A]',
    sponsors: [
      {
        name: 'Backboard',
        label: 'backboard.io',
        accent: 'from-[#5CA6FF] to-[#1F5EFF]',
        mark: '▮',
        markClassName:
          'text-[24px] font-black tracking-[-0.08em] text-[#1F5EFF]',
      },
      {
        name: 'Bot',
        label: '[ Bot ]',
        accent: 'from-[#1A0E05] to-[#3A2418]',
        mark: '[ ]',
        markClassName: 'font-canopee text-[24px] leading-none text-[#1A0E05]',
      },
      {
        name: 'Waterloo',
        label: 'The City of Waterloo',
        accent: 'from-[#F1C24A] to-[#D18B1E]',
        mark: 'W',
        markClassName:
          'text-[26px] font-black tracking-[-0.09em] text-[#1A0E05]',
      },
    ],
  },
  {
    tier: 'Gold Sponsors',
    tone: 'from-[#FFE09E] to-[#F0B84D]',
    sponsors: [
      {
        name: 'Conrad',
        label: 'University of Waterloo Conrad School',
        accent: 'from-[#F6A623] to-[#B85E16]',
        mark: 'C',
        markClassName:
          'text-[22px] font-black tracking-[-0.12em] text-[#8C3B0B]',
      },
      {
        name: 'Cursor',
        label: 'CURSOR',
        accent: 'from-[#222222] to-[#5E5E5E]',
        mark: '⌬',
        markClassName:
          'text-[24px] font-black tracking-[-0.16em] text-[#1A0E05]',
      },
      {
        name: 'EasyEDA',
        label: 'EasyEDA',
        accent: 'from-[#3B82F6] to-[#1D4ED8]',
        mark: '◌',
        markClassName:
          'text-[24px] font-black tracking-[-0.12em] text-[#2563EB]',
      },
      {
        name: 'PCBWay',
        label: 'PCBWay',
        accent: 'from-[#2EA44F] to-[#1E7E34]',
        mark: 'PCB',
        markClassName:
          'text-[24px] font-black tracking-[-0.08em] text-[#2EA44F]',
      },
    ],
  },
  {
    tier: 'Silver Sponsors',
    tone: 'from-[#F0E2C4] to-[#D7C39C]',
    sponsors: [
      {
        name: 'Reve',
        label: 'Reve',
        accent: 'from-[#111111] to-[#4A4A4A]',
        mark: '◈',
        markClassName:
          'text-[22px] font-black tracking-[-0.08em] text-[#1A0E05]',
      },
      {
        name: 'Sienci Labs',
        label: 'SIENCI LABS',
        accent: 'from-[#4B5563] to-[#1F2937]',
        mark: '◉',
        markClassName:
          'text-[22px] font-black tracking-[-0.08em] text-[#1A0E05]',
      },
      {
        name: 'Velocity',
        label: 'VELOCITY',
        accent: 'from-[#111111] to-[#444444]',
        mark: '⋯',
        markClassName:
          'text-[22px] font-black tracking-[-0.08em] text-[#1A0E05]',
      },
      {
        name: 'Voiceflow',
        label: 'Voiceflow',
        accent: 'from-[#7C3AED] to-[#312E81]',
        mark: 'vf',
        markClassName:
          'text-[22px] font-black tracking-[-0.08em] text-[#5B21B6]',
      },
      {
        name: 'Fika',
        label: 'fika',
        accent: 'from-[#D97706] to-[#92400E]',
        mark: 'f',
        markClassName:
          'text-[24px] font-black tracking-[-0.08em] text-[#B45309]',
      },
    ],
  },
];
