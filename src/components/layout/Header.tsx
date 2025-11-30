'use client';

import { NavItem, navItems } from '@/src/content/nav';
import Button from '../ui/Button';
import Link from 'next/link';
import { useState } from 'react';
import Wrapper from './Wrapper';
import { X } from 'lucide-react';

export default function Header() {
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>(navItems[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="bg-header">
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
                      : 'text-nav-inactive'
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
            className="block md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle Menu"
          >
            <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
            <span className="block w-6 h-0.5 bg-foreground mb-1"></span>
            <span className="block w-6 h-0.5 bg-foreground"></span>
          </button>
        </div>
      </Wrapper>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-header z-50">
          <div className="flex flex-col items-start p-6">
            <div className="flex items-center justify-between w-full mb-4 pb-4 border-b border-b-surface">
              <h1 className="font-bold text-xl">Synapsy AI</h1>

              <button
                type="button"
                onClick={() => setIsSidebarOpen(false)}
                aria-label="Close Menu"
              >
                <X />
              </button>
            </div>

            <nav>
              <ul className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <li
                    key={`sidebar-nav-item-${index}-${item.label}`}
                    className={`${
                      item.label === selectedNavItem.label
                        ? 'text-foreground'
                        : 'text-nav-inactive'
                    } hover:text-primary`}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setSelectedNavItem(item);
                        setIsSidebarOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
