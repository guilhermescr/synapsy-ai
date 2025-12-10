import clsx from 'clsx';
import { ReactNode } from 'react';

interface CarouselButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}

export default function CarouselButton({
  onClick,
  children,
  disabled = false,
}: CarouselButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'bg-header hover:bg-header/50 hover:border-icon/90 border border-icon rounded-lg aspect-square p-2 text-foreground',
        {
          'opacity-50 cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
        }
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
