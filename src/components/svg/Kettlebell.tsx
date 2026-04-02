export function Kettlebell({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C9.5 2 7.5 3.5 7 5.5C5.5 6.5 5 8 5 10C5 13 7.5 18 8 20C8.5 22 10 22 12 22C14 22 15.5 22 16 20C16.5 18 19 13 19 10C19 8 18.5 6.5 17 5.5C16.5 3.5 14.5 2 12 2Z" />
      <circle cx="12" cy="12" r="3" fill="white" opacity="0.3" />
    </svg>
  );
}
