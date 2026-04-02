export function Dumbbell({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="currentColor" className={className}>
      <rect x="2" y="11" width="4" height="10" rx="1" />
      <rect x="6" y="13" width="3" height="6" rx="0.5" />
      <rect x="23" y="13" width="3" height="6" rx="0.5" />
      <rect x="26" y="11" width="4" height="10" rx="1" />
      <rect x="9" y="14.5" width="14" height="3" rx="1" />
    </svg>
  );
}
