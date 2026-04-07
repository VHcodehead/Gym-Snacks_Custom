"use client";

const items = [
  "⚗️ Lab Tested Ingredients",
  "🏭 GMP Certified Facility",
  "⚡ 250mg Caffeine",
  "💪 3g Beta-Alanine",
  "💧 1g Glycerol + Real Carbs",
  "✅ No Proprietary Blends",
];

export function TrustBar() {
  return (
    <div className="bg-brand-black border-y-[3px] border-brand-black py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {items.map((item, i) => (
          <span key={i} className="font-display text-sm sm:text-base tracking-wide text-brand-yellow whitespace-nowrap">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
