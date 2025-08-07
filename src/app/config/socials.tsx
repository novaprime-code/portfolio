// src/app/config/socials.tsx - Jay Shyam Patel (Nova)'s Social Links
import { Github, Linkedin, Mail, Phone, Twitter, Youtube, Facebook } from 'lucide-react';
import { Social } from '../types/types';

// Dev.to icon component (since it's not in Lucide)
const DevToIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45h.56c.42 0 .63-.05.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.2zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64v1.3zm4.68 5.45c-.17.43-.64.79-1 .79-.18 0-.45-.15-.67-.39-.32-.32-.45-.63-.82-2.08l-.9-3.39-.45-1.67h.76c.4 0 .75.02.75.05 0 .06 1.16 4.54 1.26 4.83.04.15.32-.7.73-2.3l.66-2.52.74-.04c.4-.02.73 0 .73.04 0 .14-1.67 6.38-1.8 6.68z" />
  </svg>
);

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/novaprime-code',
    color: '#6e7681',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/jay-shyam-patel-ba4a49a3/',
    color: '#0077B5',
  },
  {
    name: 'Dev.to',
    icon: <DevToIcon />,
    url: 'https://dev.to/novaprime-code',
    color: '#0A0A0A',
  },
  {
    name: 'Twitter',
    icon: <Twitter size={20} />,
    url: 'https://twitter.com/shyampatel14314',
    color: '#1DA1F2',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:jayshyampatel133@gmail.com',
    color: '#D44638',
  },
  {
    name: 'YouTube',
    icon: <Youtube size={20} />,
    url: 'https://www.youtube.com/c/egogamer8832',
    color: '#FF0000',
  },
  {
    name: 'Facebook',
    icon: <Facebook size={20} />,
    url: 'https://fb.com/shyampatel133',
    color: '#1877F2',
  },
  {
    name: 'Phone',
    icon: <Phone size={20} />,
    url: 'tel:+9779843818406',
    color: '#4CAF50',
  },
];
