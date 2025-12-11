export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Our Team', href: '#our-team' },
  { label: 'Join Community', href: '#join-community' },
];

export type NavItem = (typeof navItems)[number];
