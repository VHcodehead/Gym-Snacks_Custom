"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const notifications = [
  { name: "John",       location: "Gilbert, AZ",          text: "just purchased the Variety Pack 🔥" },
  { name: "Joshua O.",  location: "San Jose, CA",          text: "just left a 5-star review ⭐" },
  { name: "Melissa R.", location: "Phoenix, AZ",           text: "just purchased Blue Raspberry 🛒" },
  { name: "Grant Y.",   location: "Tempe, AZ",             text: "just reordered — 2nd time buyer 💪" },
  { name: "Nicholas O.",location: "Salt Lake City, UT",    text: "just purchased the Variety Pack 🔥" },
  { name: "Samantha P.",location: "Tempe, AZ",             text: "just left a 5-star review ⭐" },
  { name: "Blake",      location: "Gilbert, AZ",           text: "just purchased Strawberry 🍓" },
  { name: "Zach D.",    location: "Tempe, AZ",             text: "just purchased Watermelon 🍉" },
  { name: "Jason G.",   location: "Tempe, AZ",             text: "just purchased the Variety Pack 🔥" },
  { name: "Laura P.",   location: "Tempe, AZ",             text: "just purchased Green Apple 🍏" },
];

export function SocialProofPopup() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Initial delay before first popup
    const initial = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(initial);
  }, []);

  useEffect(() => {
    if (!visible) return;

    // Show for 4s, hide for 5s, then next
    const hide = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(hide);
  }, [visible, index]);

  useEffect(() => {
    if (visible) return;

    // After hiding, wait then show next
    const next = setTimeout(() => {
      setIndex((i) => (i + 1) % notifications.length);
      setVisible(true);
    }, 5000);
    return () => clearTimeout(next);
  }, [visible]);

  const n = notifications[index];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={index}
          initial={{ x: -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 28 }}
          className="fixed bottom-6 left-4 z-50 flex items-center gap-3 bg-surface border-[3px] border-brand-black rounded-comic-lg shadow-comic-lg px-4 py-3 max-w-[280px] sm:max-w-xs cursor-default"
        >
          {/* Avatar */}
          <div className="w-10 h-10 rounded-full bg-brand-yellow border-[3px] border-brand-black flex items-center justify-center font-display text-brand-black text-lg flex-shrink-0">
            {n.name[0]}
          </div>

          <div className="min-w-0">
            <p className="font-display text-brand-black text-sm leading-tight">
              {n.name}{" "}
              <span className="font-body font-semibold text-brand-black/60 text-xs">
                from {n.location}
              </span>
            </p>
            <p className="text-muted text-xs mt-0.5 leading-snug">{n.text}</p>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="absolute top-1.5 right-2 text-brand-black/30 hover:text-brand-black text-xs leading-none"
            aria-label="Dismiss"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
