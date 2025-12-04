import './wrapper.css';

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children = '', className }: WrapperProps) {
  return (
    <div className={`relative max-w-348 mx-auto px-6 ${className || ''}`}>
      {children}
    </div>
  );
}
