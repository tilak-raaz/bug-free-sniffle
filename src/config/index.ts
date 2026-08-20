export const images = {
  WhatAndStatisticsBg:
    'https://res.cloudinary.com/du5qoczcn/image/upload/v1780695323/Union-2_cawrl8.png',
  rightImgAbout: '/righttape.svg',
  rightImgAboutMobile: '/righttapeMobile.svg',
  background: '/statsgrid.svg',
};

export { timelineConfig } from './timeline';
export { sponsorTiers } from './sponsor';
export type { TimelineEvent } from './timeline';

export type HeroNavItem = {
  name: string;
  href: string;
};

export const sectionIds = {
  home: 'home',
  about: 'about',
  timeline: 'timeline',
  prizes: 'prizes',
  team: 'team',
  sponsors: 'sponsors',
  faqs: 'faqs',
} as const;

export const siteNavLinks: HeroNavItem[] = [
  { name: 'Home', href: `/#${sectionIds.home}` },
  { name: 'About Us', href: `/#${sectionIds.about}` },
  { name: 'Timeline', href: `/#${sectionIds.timeline}` },
  { name: 'Prizes', href: `/#${sectionIds.prizes}` },
  { name: 'Our Team', href: `/#${sectionIds.team}` },
  { name: 'Sponsors', href: `/#${sectionIds.sponsors}` },
  { name: 'FAQs', href: `/#${sectionIds.faqs}` },
];

export const footerSectionLinks = [
  { label: 'About us', href: `/#${sectionIds.about}` },
  { label: 'Prizes', href: `/#${sectionIds.prizes}` },
  { label: 'Sponsors', href: `/#${sectionIds.sponsors}` },
  { label: 'FAQs', href: `/#${sectionIds.faqs}` },
] as const;

export const heroConfig = {
  navItems: siteNavLinks,

  social: {
    discordUrl: 'https://discord.gg/',
    discordLabel: 'DISCORD',
    mobileDiscordLabel: 'JOIN DISCORD',
  },
  event: {
    dayRange: '05-06TH',
    monthAndYear: 'September 2026',
    applyHref: '#',
    applyLabel: 'APPLY WITH DEVFOLIO',
  },
  assets: {
    pattern: '/herogrid.svg',
    navLogo: '/navlogo.svg',
    heroLogo: '/ho6.svg',
    discordIcon: '/discord.svg',
    versionImage: '/6.svg',
    datePattern: '/boxgrid.svg',
    playRing: '/Ellipse_2862.png',
    playIcon: '/playbutton.svg',
    pauseIcon: '/pausebutton.svg',
    tvDesktopFrame: '/tv.svg',
    tvmobileFrame: '/mobiletv.svg',
    footerTape: '/footertape.png',
  },
} as const;
