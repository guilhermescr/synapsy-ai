interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="cursor-pointer flex items-center gap-2 px-6 py-2 bg-background rounded-full border-2 border-primary text-white text-sm text-center font-medium hover:bg-primary/90 transition">
      {children}
    </button>
  );
}
