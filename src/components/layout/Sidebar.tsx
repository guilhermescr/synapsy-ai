'use client';

import { NavItem } from '@/src/content/nav';
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface SidebarProps {
  isOpen: boolean;
  navItems: NavItem[];
  selectedNavItem: NavItem;
  onClose: () => void;
  onSelectNavItem: (item: NavItem) => void;
}

export function Sidebar({
  isOpen,
  navItems,
  selectedNavItem,
  onClose,
  onSelectNavItem,
}: SidebarProps) {
  const sidebarVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scrollbar');
    } else {
      document.body.classList.remove('no-scrollbar');
    }

    return () => {
      document.body.classList.remove('no-scrollbar');
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-header h-screen z-50"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={sidebarVariants}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
    >
      <div className="flex flex-col items-start p-6 h-full sticky top-0">
        <div className="flex items-center justify-between w-full mb-4 pb-4 border-b border-b-surface">
          <h1 className="font-bold text-xl">Synapsy AI</h1>

          <button
            type="button"
            className="cursor-pointer"
            onClick={onClose}
            aria-label="Close Menu"
          >
            <X size={24} className="text-foreground" />
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
                    : 'text-secondary'
                } hover:text-primary`}
              >
                <Link href={item.href} onClick={() => onSelectNavItem(item)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
