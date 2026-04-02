export function LightningBolt({ className = "", size = 24 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" />
    </svg>
  );
}
