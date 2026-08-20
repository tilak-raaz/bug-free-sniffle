import { sectionIds } from './index';

type NavItem = {
  name: string;
  link: string;
};

export const navItems: NavItem[] = [
  { name: 'Home', link: `/#${sectionIds.home}` },
  { name: 'About us', link: `/#${sectionIds.about}` },
  { name: 'Timeline', link: `/#${sectionIds.timeline}` },
  {
    name: 'Contact us',
    link: 'mailto:webwiz.nitrkl@gmail.com',
  },
];
export const DISCORD_IMAGE =
  'https://res.cloudinary.com/du5qoczcn/image/upload/v1749667520/5883eb5eae1f47fad1608d0488577c57036af72d_kwi4yd.png';

export const DISCORD_LINK = 'https://discord.gg/sfzRETyx6r';
