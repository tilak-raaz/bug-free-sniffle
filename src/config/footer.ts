import { sectionIds } from './index';

export const footerLinks = [
  { label: 'Home', href: `/#${sectionIds.home}` },
  { label: 'About us', href: `/#${sectionIds.about}` },

  { label: 'FAQs', href: `/#${sectionIds.faqs}` },
  {
    label: 'Contact us',
    href: 'mailto:webwiz.nitrkl@gmail.com',
  },
];

export const socialLinks = [
  {
    src: 'https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/icon_t4isnb.svg',
    alt: 'Discord',
    href: 'https://discord.com/invite/ewun7cxkJh',
    className: 'hover:scale-115',
  },
  {
    src: 'https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/insta_cqxnrd.svg',
    alt: 'Instagram',
    href: 'https://www.instagram.com/webwiz.nitr?igsh=MWNlY3VyMDNlOGU3NA==',
    className: 'hover:scale-115',
  },
  // {
  //     src: "facebook_sbhm8s.svg",
  //     alt: "Facebook",
  //     href: "#",
  // },
  {
    src: 'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1751640427/x-social-media-black-icon_anlrxd.svg',
    alt: 'X',
    href: 'https://x.com/webwiznitr',
    className: 'scale-75 hover:scale-90',
  },
  {
    src: 'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1751045831/icons8-whatsapp_axltbb.svg',
    alt: 'Whatsapp Channel Invite',
    href: 'https://whatsapp.com/channel/0029Vb66nT830LKKS2CXla0B',
    className: 'scale-75 hover:scale-90',
  },
  {
    target: 'div',
  },

  {
    target: 'div',
  },
];

export const sponsorCTA = {
  heading: 'Want to become a sponsor of Hackodisha 6.0?',
  buttonText: 'Become a sponsor',
  buttonLink: 'https://calendly.com/hackodisha',
};

export const footerAssets = {
  logo: '/footerlogo.svg',
  presents:
    'https://res.cloudinary.com/dmvdbpyqk/image/upload/v1753506874/Frame_71_w2p95z.png',
  circle:
    'https://res.cloudinary.com/dtztahzfk/image/upload/v1749850891/wmain_d21xmo.png',
  baseCloudinaryPath:
    'https://res.cloudinary.com/dtztahzfk/image/upload/v1749845049/',
};
