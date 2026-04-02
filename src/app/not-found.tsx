import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-yellow-cream">
      <div className="text-center px-6">
        <p className="text-8xl mb-4">🍬</p>
        <h1 className="font-display text-6xl md:text-8xl text-brand-black text-shadow-pink mb-4">
          404
        </h1>
        <p className="font-display text-2xl text-brand-black mb-2">
          PAGE NOT FOUND
        </p>
        <p className="text-muted text-lg mb-8">
          Looks like this gummy got lost on the way to the gym.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-brand-pink text-white font-display text-lg rounded-pill border-[3px] border-brand-black shadow-comic-lg hover:scale-105 transition-transform"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
