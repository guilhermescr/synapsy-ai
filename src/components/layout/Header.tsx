'use client';

import { NavItem, navItems } from '@/src/content/nav';
import Button from '../ui/Button';
import Link from 'next/link';
import { useState } from 'react';
import Wrapper from './Wrapper';

export default function Header() {
  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>(navItems[0]);

  return (
    <header className="bg-header">
      <Wrapper>
        <div className="flex items-center justify-between h-20">
          <h1 className="font-bold text-xl">Synapsy AI</h1>

          <nav>
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

          <Button>Book a Demo</Button>
        </div>
      </Wrapper>
    </header>
  );
}
