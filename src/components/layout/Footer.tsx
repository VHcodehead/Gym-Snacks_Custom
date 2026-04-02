import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-brand-black border-t-[5px] border-brand-pink relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-4xl text-brand-yellow mb-2">
              GYM<span className="text-brand-pink">SNACKS</span>
            </h3>
            <p className="text-brand-yellow/60 font-medium">
              Fuel your fitness. One gummy at a time.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <Link
              href="/#shop"
              className="font-display text-lg text-white hover:text-brand-pink transition-colors"
            >
              SHOP
            </Link>
            <Link
              href="/about"
              className="font-display text-lg text-white hover:text-brand-pink transition-colors"
            >
              ABOUT
            </Link>
            <Link
              href="/#contact"
              className="font-display text-lg text-white hover:text-brand-pink transition-colors"
            >
              CONTACT
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} GymSnacks Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
