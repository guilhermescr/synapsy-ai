'use client';

import { NavItem, navItems } from '@/src/content/nav';
import Button from '../ui/Button';
import Link from 'next/link';
import { useState } from 'react';
import Wrapper from './Wrapper/Wrapper';
import { Menu } from 'lucide-react';
import { Sidebar } from './Sidebar';

export default function Header() {
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>(navItems[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-header/75 sticky top-0 z-10 backdrop-blur-md">
      <Wrapper>
        <div className="flex items-center justify-between h-20">
          <h1 className="font-bold text-xl">Synapsy AI</h1>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {navItems.map((item, index) => (
                <li
                  key={`nav-item-${index}-${item.label}`}
                  className={`${
                    item.label === selectedNavItem.label
                      ? 'text-foreground'
                      : 'text-secondary'
                  } hover:text-primary`}
                >
                  <Link
                    href={item.href}
                    onClick={() => setSelectedNavItem(item)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button>Book a Demo</Button>
          </div>

          <button
            type="button"
            className="cursor-pointer block md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Menu"
          >
            <Menu size={24} className="text-foreground" />
          </button>
        </div>
      </Wrapper>

      <Sidebar
        isOpen={isSidebarOpen}
        navItems={navItems}
        selectedNavItem={selectedNavItem}
        onClose={() => setIsSidebarOpen(false)}
        onSelectNavItem={(item) => {
          setSelectedNavItem(item);
          setIsSidebarOpen(false);
        }}
      />
    </header>
  );
}
