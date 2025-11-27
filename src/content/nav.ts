export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Blog', href: '#blog' },
];

export type NavItem = (typeof navItems)[number];
