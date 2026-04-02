export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-yellow-cream">
      <div className="text-center">
        <div className="flex gap-2 justify-center mb-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-5 h-5 rounded-full bg-brand-pink border-2 border-brand-black animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
        <p className="font-display text-xl text-brand-black">LOADING...</p>
      </div>
    </div>
  );
}
